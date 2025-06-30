import React from 'react'
import { useState } from 'react';
//import { ChevronDownIcon } from "@heroicons/react/24/solid";



export default function Location() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Preferred Location");

  const options = ["Chennai", "Bangalore", "Hyderabad", "Remote"];

  return (
    <div className="relative">
      {/* Main Box */}
      <div
  className="flex items-center justify-between w-[200px] px-3 py-2 border-r border-gray-300 cursor-pointer "
  onClick={() => setOpen(!open)}
>
  {/* Left: Icon + Text */}
  <div className="flex items-center gap-2">
    <img src="/Location.svg" alt="Location" className="w-4 h-4" />
    <span className="text-sm text-[#686868] font-medium">{selected}</span>
  </div>

  {/* Right: Dropdown icon */}
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
