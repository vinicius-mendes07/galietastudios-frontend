import { useState, useEffect, useCallback } from 'react';
import { DateTime } from 'luxon';

import {
  Form,
  FormContainer,
  CalendarContainer,
  HourContainer,
  ButtonContainer,
  HourButton,
  EmptyList,
  ErrorContainer,
  DateNotSelected,
} from './styles';

import useErrors from '../../hooks/useErrors';

import Calendar from '../Calendar';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import Button from '../Button';

import emptyBox from '../../assets/images/empty-box.svg';
import sad from '../../assets/images/sad.svg';

import ServicesService from '../../services/ServicesService';
import formatPhoneBR from '../../utils/formatPhoneBR';
import isEmailValid from '../../utils/isEmailValid';
import getDateInUTCTimezone from '../../utils/getDateInUTCTimezone';
import formatPhoneOnlyDigits from '../../utils/formatPhoneOnlyDigits';
import getCurrentDateAndHour from '../../utils/getCurrentDateAndHour';
import { zoneFormat } from '../../utils/zoneFormat';
import mountDate from '../../utils/mountDate';
import SchedulesService from '../../services/SchedulesService';
import Loader from '../Loader';
import getDateInPortugalTimezone from '../../utils/getDateInPortugalTimezone';
import toast from '../../utils/toast';
import getHourOnly from '../../utils/getHourOnly';

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedHour, setSelectedHour] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [services, setServices] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [canceledDays, setCanceledDays] = useState([]);
  const [isLoadingSchedules, setIsLoadingSchedules] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hours = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'];

  const hasSelectedDate = Object.keys(selectedDate).length !== 0;

  const hoursAvailable = hours.filter((hourString) => {
    const { currentDateAndHour } = getCurrentDateAndHour();

    let hourAvaliable = false;

    if (hasSelectedDate) {
      const date = mountDate(selectedDate.year, selectedDate.month, selectedDate.day);

      const isDayCanceled = canceledDays.find((canceledDay) => canceledDay.schedule_date === date);
      if (isDayCanceled) {
        hourAvaliable = false;
      } else {
        const dateSelected = DateTime.fromISO(`${date}T${hourString}`, { zone: zoneFormat });

        if (dateSelected.toMillis() > currentDateAndHour.toMillis()) {
          const hasSchedule = schedules.find((schedule) => {
            const scheduleStart = getDateInPortugalTimezone(schedule.schedule_date, schedule.hour);
            const scheduleEnd = getDateInPortugalTimezone(
              schedule.schedule_date,
              schedule.hour_end,
            );

            if (dateSelected.toMillis() >= scheduleStart.toMillis()
            && dateSelected.toMillis() < scheduleEnd.toMillis()) {
              return true;
            }
            return false;
          });

          if (hasSchedule) {
            hourAvaliable = false;
          } else {
            hourAvaliable = hourString;
          }
        } else {
          hourAvaliable = false;
        }
      }
    } else {
      hourAvaliable = false;
    }
    return hourAvaliable !== false;
  });

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByField,
  } = useErrors();

  const isFormValid = (
    name
    && phone
    && email
    && serviceId
    && hasSelectedDate
    && selectedHour
    && errors.length === 0
  );

  const loadSchedules = useCallback(async () => {
    try {
      setIsLoadingSchedules(true);
      if (hasSelectedDate) {
        const dateMounted = mountDate(selectedDate.year, selectedDate.month, selectedDate.day);
        const [schedulesList, canceledDaysList] = await Promise.all([
          SchedulesService.listSchedules(dateMounted),
          SchedulesService.listCanceledDays(),
        ]);
        setSchedules(schedulesList);

        setCanceledDays(canceledDaysList);
        setHasError(false);
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
      setSchedules([]);
    } finally {
      setIsLoadingSchedules(false);
    }
  }, [hasSelectedDate, selectedDate]);

  useEffect(() => {
    async function loadServices() {
      try {
        const servicesList = await ServicesService.listServices();

        setServices(servicesList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingServices(false);
      }
    }

    loadSchedules();
    loadServices();
  }, [loadSchedules]);

  function handleTryAgain() {
    loadSchedules();
  }

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }
  function handlePhoneChange(event) {
    setPhone(formatPhoneBR(event.target.value));

    if (!event.target.value) {
      setError({ field: 'phone', message: 'Telefone é obrigatório.' });
    } else {
      removeError('phone');
    }
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (!event.target.value || !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }
  function handleServiceIdChange(event) {
    setServiceId(event.target.value);

    if (!event.target.value) {
      setError({ field: 'serviceId', message: 'Serviço é obrigatório.' });
    } else {
      removeError('serviceId');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      const date = mountDate(selectedDate.year, selectedDate.month, selectedDate.day);
      const { dateInUtc, hourInUtc } = getDateInUTCTimezone(date, selectedHour);

      const dateSelectedStart = DateTime.fromISO(`${date}T${selectedHour}`, { zone: zoneFormat });

      const selectedService = services.find((service) => service.id === serviceId);

      const dateSelectedEnd = dateSelectedStart.plus({ minutes: selectedService.duration });

      const isDateEndInBetweenScheduleDate = schedules.find((schedule) => {
        let dateIsInBetweenScheduleDate = false;
        const scheduleDateStart = getDateInPortugalTimezone(schedule.schedule_date, schedule.hour);

        const scheduleDateEnd = getDateInPortugalTimezone(
          schedule.schedule_date,
          schedule.hour_end,
        );

        if (dateSelectedEnd.toMillis() > scheduleDateStart.toMillis()
        && dateSelectedEnd.toMillis() <= scheduleDateEnd.toMillis()) {
          dateIsInBetweenScheduleDate = true;
        }
        return dateIsInBetweenScheduleDate;
      });

      if (isDateEndInBetweenScheduleDate) {
        const dateInBetween = getDateInPortugalTimezone(
          isDateEndInBetweenScheduleDate.schedule_date,
          isDateEndInBetweenScheduleDate.hour,
        );

        const hourOnly = getHourOnly(dateInBetween);
        toast({
          type: 'danger',
          text: `O horário escolhido parece não ter tempo suficente para o serviço, há um agendamento às ${hourOnly}, tente escolher outro!`,
        });

        return;
      }

      const schedule = await SchedulesService.createSchedule({
        name,
        phone: formatPhoneOnlyDigits(phone),
        email,
        schedule_date: dateInUtc,
        hour: hourInUtc,
        service_id: serviceId,
      });

      console.log(schedule);
      setName('');
      setPhone('');
      setEmail('');
      setSelectedHour('');
      setServiceId('');

      toast({
        type: 'success',
        text: 'Solicitação de agendamento efetuada com sucesso!',
      });
    } catch (error) {
      console.log(error);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao solicitar agendamento!',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const hasHoursAvailable = hoursAvailable.length > 0;
  const isListEmpty = (!hasHoursAvailable && !hasError && hasSelectedDate)
   || (isLoadingSchedules && !hasError);

  return (
    <>
      <Loader isLoading={isLoadingSchedules} />
      <Form onSubmit={handleSubmit} noValidate>
        <FormContainer>
          <FormGroup error={getErrorMessageByField('name')}>
            <Input
              error={getErrorMessageByField('name')}
              type="text"
              placeholder="Nome *"
              onChange={handleNameChange}
              value={name}
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByField('phone')}>
            <Input
              error={getErrorMessageByField('phone')}
              type="text"
              placeholder="Telefone *"
              onChange={handlePhoneChange}
              value={phone}
              maxLength="15"
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByField('email')}>
            <Input
              error={getErrorMessageByField('email')}
              type="email"
              placeholder="E-mail *"
              onChange={handleEmailChange}
              value={email}
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup
            error={getErrorMessageByField('serviceId')}
            isLoading={isLoadingServices}
          >
            <Select
              error={getErrorMessageByField('serviceId')}
              onChange={handleServiceIdChange}
              value={serviceId}
              disabled={isLoadingServices || isSubmitting}
            >
              <option value="" disabled>Serviço</option>
              <option value="321">teste</option>

              {services.length > 0 && services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.service_type} - {service.duration} min
                </option>
              ))}
            </Select>
          </FormGroup>
        </FormContainer>

        <CalendarContainer>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setSelectedHour={setSelectedHour}
            isSubmitting={isSubmitting}
            setHasError={setHasError}
          />
          <HourContainer>
            {(hasHoursAvailable && !hasError && !isLoadingSchedules) && (
              hoursAvailable.map((hourAndMinute, index) => (
                <HourButton
                  type="button"
                  key={index}
                  hour={hourAndMinute}
                  onClick={() => setSelectedHour(hourAndMinute)}
                  $selectedHour={selectedHour === hourAndMinute}
                  disabled={isSubmitting}
                >
                  {hourAndMinute}
                </HourButton>
              ))
            )}

            {isListEmpty && (
              <EmptyList>
                <img src={emptyBox} alt="empty box" />
                <p>Nenhum horário disponivel para esta data</p>
              </EmptyList>
            )}

            {hasError && (
              <ErrorContainer>
                <img src={sad} alt="sad" />
                <div className="details">
                  <strong>Ocorreu um erro ao obter os horários disponíveis!</strong>
                  <Button
                    type="button"
                    onClick={handleTryAgain}
                  >
                    Tentar novamente
                  </Button>
                </div>
              </ErrorContainer>
            )}
            {(!hasSelectedDate && !hasError) && (
              <DateNotSelected>
                <p>Nenhuma data selecionada.</p>
                <p>Selecione um dia no calendário acima.</p>
              </DateNotSelected>
            )}
          </HourContainer>

          <ButtonContainer>
            <Button
              type="submit"
              disabled={!isFormValid}
              isLoading={isSubmitting}
            >
              Agendar
            </Button>
          </ButtonContainer>

        </CalendarContainer>

      </Form>
    </>
  );
}
