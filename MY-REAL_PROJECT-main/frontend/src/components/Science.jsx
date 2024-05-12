 
import React from "react";

import { useNavigate } from "react-router-dom";
export default function Science() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 m-10  mb-24 sm:grid-cols-2  gap-10">
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/class-xi")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">CLASS 11</p>
          <span className="italic text-sm">class 11 science</span>
          <span
            onClick={() => navigate("/class-xi")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>

      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://imgs.search.brave.com/9rSCCq8Fh0SCfcfffphloM4eR49AAn0eMNqTyXahabM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc1LzE1Lzky/LzM2MF9GXzE3NTE1/OTI5MF96dml2NHpY/WkZNYXFHbldSQW50/R0gyNjlLT0V0S05v/OS5qcGc"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/class-xii")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">CLASS 12</p>
          <span className="italic text-sm">class 12 science</span>
          <span
            onClick={() => navigate("/class-xii")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
    </div>
  );
}
