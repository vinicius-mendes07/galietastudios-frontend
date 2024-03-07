import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [selectedDay, setSelectedDay] = useState({});

  const renderCalendar = useCallback(() => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = firstDayOfMonth; i > 0; i -= 1) {
      setDays((prevState) => [...prevState, {
        id: Math.random(),
        className: 'inactive',
        year: currentYear,
        month: currentMonth,
        day: `${lastDateOfLastMonth - i + 1}`,
      }]);
    }

    for (let i = 1; i <= lastDateOfMonth; i += 1) {
      const isToday = i === date.getDate()
            && currentMonth === new Date().getMonth()
            && currentYear === new Date().getFullYear()
        ? 'today'
        : '';

      const todayDate = new Date();
      todayDate.setUTCHours(0, 0, 0, 0);

      const dayDate = new Date(currentYear, currentMonth, i);
      dayDate.setUTCHours(0, 0, 0, 0);

      const datePassed = dayDate.getTime() < todayDate.getTime();

      const inactive = datePassed ? 'inactive' : '';

      if (isToday) {
        setSelectedDay({
          id: Math.random(),
          className: `${isToday} ${inactive}`,
          year: currentYear,
          month: currentMonth,
          day: `${i}`,
        });
      }

      setDays((prevState) => [...prevState, {
        id: Math.random(),
        className: `${isToday} ${inactive}`,
        year: currentYear,
        month: currentMonth,
        day: `${i}`,
      }]);
    }

    for (let i = lastDayOfMonth; i < 6; i += 1) {
      setDays((prevState) => [...prevState, {
        id: Math.random(),
        className: 'inactive',
        year: currentYear,
        month: currentMonth,
        day: `${i - lastDayOfMonth + 1}`,
      }]);
    }

    setCurrentDate(`${months[currentMonth]} ${currentYear}`);
  }, [currentMonth, currentYear, date]);

  useEffect(() => {
    setDays([]);

    renderCalendar();
  }, [renderCalendar]);

  function handlePrevClick() {
    setCurrentMonth((prevState) => prevState - 1);

    if (currentMonth <= 0) {
      setDate(new Date(currentYear, currentMonth));

      setCurrentYear((prevState) => prevState - 1);
      setCurrentMonth(11);
    } else {
      setDate(new Date());
    }
  }

  function handleNextClick() {
    setCurrentMonth((prevState) => prevState + 1);

    if (currentMonth >= 11) {
      setDate(new Date(currentYear, currentMonth));

      setCurrentYear((prevState) => prevState + 1);

      setCurrentMonth(0);
    } else {
      setDate(new Date());
    }
  }

  function handleSelectDay(day) {
    setSelectedDay(day);
  }

  return (
    <Container>
      <header>
        <p className="current-date">{currentDate}</p>
        <div className="icons">
          <button
            type="button"
            id="prev"
            className="material-symbols-rounded"
            onClick={handlePrevClick}
          >
            chevron_left
          </button>
          <button
            type="button"
            id="next"
            className="material-symbols-rounded"
            onClick={handleNextClick}
          >
            chevron_right
          </button>
        </div>
      </header>

      <div className="calendar">
        <ul className="weeks">
          <li>Dom</li>
          <li>Seg</li>
          <li>Ter</li>
          <li>Qua</li>
          <li>Qui</li>
          <li>Sex</li>
          <li>Sab</li>
        </ul>

        <ul className="days">
          {days.map((day) => (
            <li key={day.id}>
              <button
                type="button"
                onClick={() => handleSelectDay(day)}
                disabled={day.className.includes('inactive')}
                className={`
                ${day.className}
                ${
                  (day.day === selectedDay.day
                    && day.month === selectedDay.month
                    && day.year === selectedDay.year
                    && !day.className.includes('inactive')) ? 'selected-day' : ''
                }
                `}
              >
                {day.day}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
