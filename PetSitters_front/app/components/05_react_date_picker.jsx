import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru)



//import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function CreateDatePicker(){
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState();
  // return (
  //   <>
  //     <DatePicker
  //       selected={startDate}
  //       onSelect={(date) => setStartDate(date)}
  //       selectsStart
  //       startDate={startDate}
  //       //endDate={endDate}
  //       minDate={new Date()}
  //     />
  //     <DatePicker
  //       selected={endDate}
  //       onSelect={(date) => setEndDate(date)}
  //       selectsEnd
  //       startDate={startDate}
  //       endDate={endDate}
  //       minDate={startDate}
  //     />
  //   </>
  // );

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