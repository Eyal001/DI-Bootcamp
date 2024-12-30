import { useDispatch } from "react-redux";
import { selectDate } from "../Redux/actions";

const DatePicker = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedDate = event.target.value;
    console.log("Selected date:", selectedDate);
    dispatch(selectDate(selectedDate));
  };

  return (
    <div>
      <input type="date" onChange={handleChange} />
    </div>
  );
};

export default DatePicker;
