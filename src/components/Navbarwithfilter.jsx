import React from 'react'
import Navbar from './Navbar'
import { Job_type } from './filter_compo/Job_type'

import  Location  from './filter_compo/Location'

import  Salary_range  from './filter_compo/Salary_range'

import { Search_input } from './filter_compo/Search_input'

export const Navbarwithfilter = () => {
    return (
        <div className="w-full bg-w  h-[214px]">
            
            <div className="flex justify-center items-center top-[21px]">
                <Navbar />
            </div>

            
                <div className="flex items-center justify-evenly gap-4 px-6 py-4 w-full mt-[50px] shadow-[0px_4px_8px_#C6BFBF40]
  bg-white shadow-sm rounded-xl">
                    {/* filter comp hereee... */}
                    <Search_input/>
                    <Job_type/>
                    <Location/>
                    <Salary_range/>
                    

                </div>
            
        </div>

    )
}
