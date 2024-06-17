import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru)


/// создаем календарь используя react-datepicker

export default function CreateDatePicker(){

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      locale="ru"
      dateFormat="dd.MM.yyyy"
      selectsRange={true}
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      //withPortal
    />
  );
};