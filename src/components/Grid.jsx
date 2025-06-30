// components/JobGrid.jsx
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Grid() {
    const jobss = useSelector((state) => state.jobs.jobs);
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://intern-b0mx.onrender.com/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="w-[1312px] mx-auto bg-[#FBFBFF]  grid grid-cols-4 gap-4">
      {jobs.map((job, i) => (
        <div
          key={i}
          className="w-[316px] h-[360px] bg-white border border-[#E0E0E0] rounded-xl shadow-sm p-4 flex flex-col justify-between shadow-[0px_8px_20px_#C6BFBF40]

"
        >
          {/* Top: Logo + Badge */}
          <div className="flex justify-between items-start">
            <div className="w-[83.46px] h-[82px] bg-[#F1F1F1] rounded-xl shadow-[0_4px_14px_#D3D3D326] flex items-center justify-center">
              <div className="w-[65.8] h-[65.8] rounded-full ">
                              <img src="/tesla_i.png" alt="Company Logo" className="w-[60px] h-[60px] rounded-full" />

              </div>
            </div>

            <div className="flex items-center justify-center w-[75px] h-[33px] px-[10px] py-[7px] gap-[10px] rounded-[10px] bg-[#B0D9FF]">
              <span className="text-sm text-[#303030] font-medium">24h Ago</span>
            </div>
          </div>

          {/* Title */}
          
            
            <h3 className="mt-2 w-[190px] h-[27px] text-[#303030] text-lg font-semibold">
            {job.title}
          </h3>
          

          {/* Info Row */}
          <div className="flex items-center gap-[16px] mt-2 h-[22px] text-sm text-[#686868]">
            <span>
              <img src="/card_profile.svg" alt="card profile" className="w-4 h-4" />
            </span>
            <span>1-3yr Exp</span>
            <span>
              <img src="/location_incard.svg" alt="card profile" className="w-4 h-4" />
            </span>
            <span>{job.location}</span>
            <span>
              <img src="/salary_incard.svg" alt="card profile" className="w-4 h-4" />
            </span>
            <span>{job.salaryRange}LPA</span>
          </div>

          {/* Description */}
          <p className="mt-2 w-[300px] h-[36px] text-sm text-gray-600 pr-2 text-justify leading-tight">
            {job.description}
          </p>

          {/* Apply Now Button */}
          <button className="w-[284px] h-[46px] mt-4 px-[10px] py-[12px] bg-[#00AAFF] text-white text-sm font-medium rounded-[10px] border border-[#00AAFF] hover:shadow-[0px_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}
