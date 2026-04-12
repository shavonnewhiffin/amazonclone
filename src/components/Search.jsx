import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center w-full h-10 bg-[var(--color-yellow)] rounded">
        <select name="" className="p-2 bg-gray-300 text-black h-full text-xs xl:text-sm rounded-r" id="">
            <option value="">All</option>
            <option value="">Deals</option>
            <option value="">Amazon</option>
            <option value="">Fashion</option>
            <option value="">Computers</option>
            <option value="">Home</option>
            <option value="">Mobile</option>
        </select>
        <input
          className="w-full h-[100%] text-black  bg-white border-gray-400 px-2 flex items-center grow"
          type="text"
          placeholder="Search..."
        />
        <button className="w-[45px]">
        <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
        </button>
      </div>
    </div>
  )
}

export default Search