import { useState } from "react";
import AddTask from "./AddTask";

const Calendar = ({ setSelectedDate }) => {
  const [dateValue, setDateValue] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDateValue(e.target.value);
    setSelectedDate(newDate);
  };

  return (
    <>
      <input onChange={handleDateChange} value={dateValue} type="date" />
      <AddTask date={dateValue} />
    </>
  );
};
export default Calendar;
