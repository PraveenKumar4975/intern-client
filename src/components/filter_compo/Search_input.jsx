import React from 'react'

export const Search_input = () => {
    return (
        <div>
            <div className="flex items-center  gap-4 border-r border-gray-300  pr-15 ">
                <img src="/input_search.svg" className="w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    className="outline-none text-sm text-gray-700 bg-transparent placeholder:text-gray-400"
                />
            </div>

        </div>
    )
}
