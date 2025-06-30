import React from 'react'
import { useState } from 'react';

export const Job_type = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Job Type");

  const options = ["Full-Time", "Part-Time", "Internship", "Freelance"];

  return (
    <div className="relative">
      {/* Main Box */}
      <div
        className="flex items-center justify-between w-[200px] gap-4 px-3 py-2 border-r border-gray-300 cursor-pointer pr-15"
        onClick={() => setOpen(!open)}
      >
        <img src="/jobtype.svg" alt="Job Type" className="w-4 h-4" />
        <span className="text-sm text-[#686868] font-medium">{selected}</span>
        <img src="/dropdown.svg" alt="Dropdown" className="w-4 h-4" />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
