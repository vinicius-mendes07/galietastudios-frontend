import {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';

import {
  Form,
  FormContainer,
  CalendarContainer,
  HourContainer,
  ButtonContainer,
  HourButton,
  DateNotSelected,
} from './styles';

import useErrors from '../../hooks/useErrors';

import Calendar from '../Calendar';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import Button from '../Button';

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
import EmptyList from '../EmptyList';
import ErrorContainer from '../ErrorContainer';

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedHour, setSelectedHour] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [services, setServices] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [isLoadingSchedules, setIsLoadingSchedules] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [schedulesAndCanceledDays, setSchedulesAndCanceledDays] = useState([]);

  const navigate = useNavigate();

  console.log(schedulesAndCanceledDays);

  const hours = useMemo(() => ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'], []);

  const hasSelectedDate = Object.keys(selectedDate).length !== 0;

  const hoursAvailable = useMemo(() => hours.filter((hourString) => {
    const { currentDateAndHour } = getCurrentDateAndHour();

    let hourAvaliable = false;

    if (hasSelectedDate) {
      const date = mountDate(selectedDate.year, selectedDate.month, selectedDate.day);

      const isDayCanceled = schedulesAndCanceledDays.find(
        (schedule) => (schedule.schedule_date === date && !schedule.available),
      );
      if (isDayCanceled) {
        return false;
      }
      const dateSelected = DateTime.fromISO(`${date}T${hourString}`, { zone: zoneFormat });

      if (dateSelected.toMillis() > currentDateAndHour.toMillis()) {
        const hasSchedule = schedulesAndCanceledDays.find((schedule) => {
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
    } else {
      return false;
    }
    return hourAvaliable !== false;
  }), [hasSelectedDate, hours, schedulesAndCanceledDays, selectedDate]);

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

  const loadAllSchedules = useCallback(async () => {
    try {
      setIsLoadingSchedules(true);
      const [servicesList, schedulesAndCanceledDaysList] = await Promise.all([
        ServicesService.listServices(), SchedulesService.listSchedulesAndCanceledDays(),
      ]);

      setServices(servicesList);
      setSchedulesAndCanceledDays(schedulesAndCanceledDaysList);
      setHasError(false);
    } catch (error) {
      console.log(error);
      setHasError(true);
      setSchedulesAndCanceledDays([]);
    } finally {
      setIsLoadingSchedules(false);
      setIsLoadingServices(false);
    }
  }, []);

  useEffect(() => {
    loadAllSchedules();
  }, [loadAllSchedules]);

  function handleTryAgain() {
    loadAllSchedules();
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

      const isDateEndInBetweenScheduleDate = schedulesAndCanceledDays.find((schedule) => {
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

      await SchedulesService.createSchedule({
        name,
        phone: formatPhoneOnlyDigits(phone),
        email,
        schedule_date: dateInUtc,
        hour: hourInUtc,
        service_id: serviceId,
      });

      setName('');
      setPhone('');
      setEmail('');
      setSelectedHour('');
      setServiceId('');

      toast({
        type: 'success',
        text: 'Solicitação de agendamento efetuada com sucesso!',
      });

      navigate('/schedule/success', { replace: true });
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

  const handleSelectedDate = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const handleSelectedHour = useCallback((hour) => {
    setSelectedHour(hour);
  }, []);
  const handleHasError = useCallback((error) => {
    setHasError(error);
  }, []);

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
            onSelectedDate={handleSelectedDate}
            onSelectedHour={handleSelectedHour}
            isSubmitting={isSubmitting}
            onHasError={handleHasError}
            allSchedules={schedulesAndCanceledDays}
            allHours={hours}
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

            {isListEmpty && <EmptyList text="Nenhum horário disponivel para esta data" />}

            {hasError && (
              <ErrorContainer
                text="Ocorreu um erro ao obter os horários disponíveis!"
                onTryAgain={handleTryAgain}
              />
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
