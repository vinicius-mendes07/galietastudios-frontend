import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

import {
  Form,
  FormContainer,
  CalendarContainer,
  HourContainer,
  ButtonContainer,
  HourButton,
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

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedHour, setSelectedHour] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [services, setServices] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  // const [schedules, setSchedules] = useState([]);
  // const [isLoadingSchedules, setIsLoadingSchedules] = useState(true);

  const hours = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'];

  const hoursAvailable = hours.filter((hourString) => {
    const { currentDateAndHour } = getCurrentDateAndHour();

    let hourAvaliable = false;

    if (Object.keys(selectedDate).length !== 0) {
      const date = mountDate(selectedDate.year, selectedDate.month, selectedDate.day);
      const dateSelected = DateTime.fromISO(`${date}T${hourString}`, { zone: zoneFormat });

      if (dateSelected.toMillis() > currentDateAndHour.toMillis()) {
        hourAvaliable = hourString;
      } else {
        hourAvaliable = false;
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
    && Object.keys(selectedDate).length !== 0
    && selectedHour
    && errors.length === 0
  );

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

    loadServices();
  }, []);

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

  function handleSubmit(event) {
    event.preventDefault();

    const date = mountDate(selectedDate.year, selectedDate.month, selectedDate.day);

    const { dateInUtc, hourInUtc } = getDateInUTCTimezone(date, selectedHour);

    console.log({
      name,
      phone: formatPhoneOnlyDigits(phone),
      email,
      schedule_date: dateInUtc,
      hour: hourInUtc,
      serviceId,
    });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormContainer>
        <FormGroup error={getErrorMessageByField('name')}>
          <Input
            error={getErrorMessageByField('name')}
            type="text"
            placeholder="Nome *"
            onChange={handleNameChange}
            value={name}
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
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByField('email')}>
          <Input
            error={getErrorMessageByField('email')}
            type="email"
            placeholder="E-mail *"
            onChange={handleEmailChange}
            value={email}
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
            disabled={isLoadingServices}
          >
            <option value="" disabled>Serviço</option>

            {services.length > 0 && services.map((service) => (
              <option key={service.id} value={service.id}>{service.service_type}</option>
            ))}
          </Select>
        </FormGroup>
      </FormContainer>

      <CalendarContainer>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSelectedHour={setSelectedHour}
        />
        <HourContainer>
          {hoursAvailable.map((hourAndMinute, index) => (
            <HourButton
              type="button"
              key={index}
              hour={hourAndMinute}
              onClick={() => setSelectedHour(hourAndMinute)}
              $selectedHour={selectedHour === hourAndMinute}
            >
              {hourAndMinute}
            </HourButton>
          ))}
        </HourContainer>

        <ButtonContainer>
          <Button
            type="submit"
            disabled={!isFormValid}
          >
            Agendar
          </Button>
        </ButtonContainer>

      </CalendarContainer>

    </Form>
  );
}
