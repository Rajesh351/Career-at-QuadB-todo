import React, { useState } from 'react';
import { FaPlus, FaStar, FaBell, FaCalendarAlt, FaRedo, FaTrash, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectdUser } from './redux/authSlice';
import Calendar from 'react-calendar'; // Importing react-calendar

import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

const TaskDetail = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector(store => store.auth);
  const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility

  const handleStarClick = () => {
    // Toggle the value of selected
    dispatch(setSelectdUser(!selected));
    // Log the updated value of selected
    console.log(!selected);  // Since we're toggling, log the new value directly
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar); // Toggle the calendar visibility
  };

  return (
    <div className="absolute right-2 w-[370px] p-5  bg-green-50 shadow-lg h-full flex flex-col">
      <div className="flex justify-between items-center text-xl font-bold">
        <span>Buy groceries</span>
        <FaStar className="text-yellow-500" />
      </div>
      <div className="flex items-center py-2 border-t border-gray-300 cursor-pointer">
        <FaPlus className="mr-2" /> Add Step
      </div>
      <div className="flex items-center py-2 border-t border-gray-300 cursor-pointer">
        <FaBell className="mr-2" /> Set Reminder
      </div>
      <div 
        className="flex items-center py-2 border-t border-gray-300 cursor-pointer" 
        onClick={toggleCalendar} // Toggle calendar visibility on click
      >
        <FaCalendarAlt className="mr-2" /> Add Due Date
      </div>

      {/* Conditionally render calendar for the current month */}
      {showCalendar && (
        <div className="mt-3 p-3 bg-white border rounded shadow-md">
          <p className="font-semibold text-lg">Select a Date</p>
          <Calendar 
            value={new Date()} // Set the current date to be the initial value
            view="month" // Show the month view by default
            minDate={new Date()} // Disable previous months
            className="react-calendar"
          />
        </div>
      )}

      <div className="flex items-center py-2 border-t border-gray-300 cursor-pointer">
        <FaRedo className="mr-2" /> Repeat
      </div>
      <div className="flex items-center py-2 border-t border-gray-300 cursor-pointer">
        Add Notes
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center text-sm mt-auto">
        <FaTimes onClick={handleStarClick} /> Created Today
        <FaTrash className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskDetail;
