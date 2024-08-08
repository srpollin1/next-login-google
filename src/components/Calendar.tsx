import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <div className="calendar-container mx-4 my-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Select a Date</h2>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        className="border p-2 rounded-md w-full"
        dateFormat="MMMM d, yyyy"
      />
      <div className="mt-4">
        <p className="text-lg">Selected Date:</p>
        <p className="text-xl font-semibold">{startDate?.toDateString()}</p>
      </div>
    </div>
  );
};

export default Calendar;
