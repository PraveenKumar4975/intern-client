// components/Navbar.jsx
import {CreateJobModal} from "./CreateJobModal";
import { useState } from "react";


export default function Navbar() {
      const [showModal, setShowModal] = useState(false);

    const onJobSubmit=()=>{

    }


//     const handlePublish = async () => {
//   await axios.post('http://localhost:5000/api/jobs', formData);
//   fetchJobs(); // re-fetch grid data
//};
    return (

        <>
            <div className="flex justify-center mt-[21px]">
                <nav className="w-[890px] h-[80px] shadow-[0px_4px_20px_#C6BFBF40]
 bg-white border border-[#FCFCFC] rounded-[122px] px-6 py-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-8 w-[838px] h-[48px]">
                        <img src="/logo.png" alt="Logo" className="h-15" />
                        <div className="w-[613px] h-[48px]">
                            <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Home
                                </li>

                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Find Jobs
                                </li>

                                <li className="w-[148px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Find Talents
                                </li>

                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    About Us
                                </li>

                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Testimonials
                                </li>
                            </ul>


                        </div>
                        <div>
                            <button onSubmit={onJobSubmit} onClick={() => setShowModal(true)} className="w-[133px] h-[48px] relative overflow-hidden rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-violet-500 shadow-md hover:from-purple-700 hover:to-violet-600 transition-all duration-300 group hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)]">
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform ">
    Create Jobs
  </span>
  {/* <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform translate-y-full group-hover:translate-y-0"                      text-center text-justify>
    Login
  </span> */}
</button>

                        </div>



                    </div>
                </nav>
            </div>
                  <CreateJobModal isOpen={showModal} onClose={() => setShowModal(false)} onSubmit={onJobSubmit} />

        </>
    );
}
