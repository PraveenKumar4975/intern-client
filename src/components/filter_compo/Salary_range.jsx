import React, { useState } from "react";

export default function Salary_range() {
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(50);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxSalary - 5);
    setMinSalary(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minSalary + 5);
    setMaxSalary(value);
  };

  return (
    <div className=" flex flex-col justify-between">
      {/* Label Row */}
      <div className="flex justify-around items-center">
        <h5 className="text-sm text-[#686868] font-medium">Salary Per Month</h5>
        <p className="ml-[20px] text-sm text-[#686868] font-medium">₹{minSalary}k - ₹{maxSalary}k</p>
      </div>

      {/* Range Slider */}
      <div className="relative mt-4">
        {/* Full Track */}
        <div className="h-1 bg-[#E0E0E0] rounded relative">
          {/* Active Track */}
          <div
            className="h-1 bg-black absolute top-0"
            style={{
              left: `${minSalary}%`,
              width: `${maxSalary - minSalary}%`,
            }}
          />
        </div>

        {/* Sliders */}
        <input
          type="range"
          min="0"
          max="100"
          value={minSalary}
          onChange={handleMinChange}
          className="absolute w-full top-[-6px] appearance-none pointer-events-auto bg-transparent accent-black"
        />

        <input
          type="range"
          min="0"
          max="100"
          value={maxSalary}
          onChange={handleMaxChange}
          className="absolute w-full top-[-6px] appearance-none pointer-events-auto bg-transparent accent-black"
        />
      </div>
    </div>
  );
}
