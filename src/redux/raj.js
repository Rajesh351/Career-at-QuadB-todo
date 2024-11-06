import React from 'react';

const CircleChart = ({ progress }) => {
  const radius = 40;  // Radius of the circle
  const circumference = 2 * Math.PI * radius;  // Calculate circumference
  const strokeDasharray = circumference;  // Total stroke length
  const strokeDashoffset = circumference - (progress / 100) * circumference;  // Calculate the offset based on progress
  
  return (
    <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg w-full text-center">
        <div> <p className="text-lg font-semibold">Today Tasks</p></div>
      <svg className="w-32 h-32 mt-4" width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="green"
          strokeWidth="8"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 80 80)"  // Rotate to start the circle from top
        />
      </svg>
    </div>
  );
};

export default CircleChart;
