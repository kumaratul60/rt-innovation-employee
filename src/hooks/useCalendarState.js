import { useState } from "react";
import {
  formatDate,
  handleButtonDate,
  generateCalendarData,
} from "../utils/AddPageUTILS";

const useCalendarState = (initialSelectedDates) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(initialSelectedDates);
  const [clickedButton, setClickedButton] = useState(null);

  const calendarData = generateCalendarData(currentYear, currentMonth);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleDateClick = (date) => {
    setClickedButton(null);
    setSelectedDate(formatDate(date, currentYear, currentMonth));
  };

  const handleButtonClick = (buttonText) => {
    setClickedButton(buttonText);
    const formattedDate = handleButtonDate(buttonText, new Date());
    setSelectedDate(formattedDate);
  };

  return {
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    selectedDate,
    setSelectedDate,
    clickedButton,
    setClickedButton,
    calendarData,
    nextMonth,
    prevMonth,
    handleDateClick,
    handleButtonClick,
  };
};

export default useCalendarState;
