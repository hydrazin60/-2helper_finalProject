import React from "react";

import { useNavigate } from "react-router-dom";
export default function OldIsGold() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 m-10  mb-24 sm:grid-cols-2  gap-10">
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://imgs.search.brave.com/x7Q7wAhFoGvOQWRmxpDUEVO_3RX3PUSowIcKGO0WfBM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NWFkNzljMmRlZTRm/Mjg2YjUxYmVkYWQ4/L21hc3Rlci93XzMy/MCxjX2xpbWl0L0No/b3R0LWVsLUplcmlk/LUdldHR5SW1hZ2Vz/LTEzNTE2NTE5OC5q/cGc"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/oldisgold-class-11-science")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2"> oldisGold CLASS 11 (Science)</p>
          <span className="italic text-sm">class 11 science</span>
          <span
            onClick={() => navigate("/oldisgold-class-11-science")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
{/*  */}
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://imgs.search.brave.com/DZO6kOM_yWATtuz_7s4oBqkI-gOBi9V_jjuYYVpsrf0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzL2E1/L2FjLzAzYTVhY2Rh/ZTcyZDJiZWU5MmUw/OTk5MjE0NmQyMjYx/LmpwZw"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/oldisgold-class-12-science")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">oldisgold CLASS 12 (Science) </p>
          <span className="italic text-sm">class 12 science</span>
          <span
            onClick={() => navigate("/oldisgold-class-12-science")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
      {/*  */}
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://imgs.search.brave.com/IE1XJL6qiPj5icIgLHXkvPuxQNbF9kgXO6Jkpo1li4s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIxLzA2/L2MxLzIxMDZjMTk0/NDY0YjJkMThmMDRh/OTI1YjVhYWY4NzQy/LmpwZw"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/oldisgold-class-11-managment")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2"> oldisgold CLASS 11 ( Managment) </p>
          <span className="italic text-sm">class 12  managment</span>
          <span
            onClick={() => navigate("/oldisgold-class-11-managment")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
      {/*  */}
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://imgs.search.brave.com/QBkxPVu4oAPTHo1wZ2xO9MezqLNMLzfmzH1gDUnqvW4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzA4/L2YwLzNjMDhmMDM4/NzY1N2FiNWEwM2Q3/OTMyZWVkMThiNWI4/LmpwZw"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/oldisgold-class-12-managment")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2"> oldisgold CLASS 12 ( managment) </p>
          <span className="italic text-sm">class 12  managment</span>
          <span
              onClick={() => navigate("/oldisgold-class-12-managment")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
    </div>
  );
}
