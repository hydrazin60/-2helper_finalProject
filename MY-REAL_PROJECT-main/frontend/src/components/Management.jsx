import React from "react";
import { useNavigate } from "react-router-dom";
export default function Management() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 m-10 mb-24 sm:grid-cols-2   gap-10">
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all">
        <img
          src="https://imgs.search.brave.com/z9TDJUH81hH_8optH4cxG3GOQAuzcRJP0zXoYi4rH8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NS8wNS8wMi8zNy9z/dW5zZXQtMTM3MzE3/MV82NDAuanBn"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">CLASS 11</p>
          <span className="italic text-sm">class 11 science</span>
          <span
            onClick={() => navigate("/managment-class-xi")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
      {/*   */}
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all">
        <img
          src="https://imgs.search.brave.com/z9TDJUH81hH_8optH4cxG3GOQAuzcRJP0zXoYi4rH8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NS8wNS8wMi8zNy9z/dW5zZXQtMTM3MzE3/MV82NDAuanBn"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">CLASS 12</p>
          <span className="italic text-sm">class 12 science</span>
          <span
            onClick={() => navigate("/managment-class-xii")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>

      {/*  */}
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all">
        <img
          src="https://imgs.search.brave.com/z9TDJUH81hH_8optH4cxG3GOQAuzcRJP0zXoYi4rH8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NS8wNS8wMi8zNy9z/dW5zZXQtMTM3MzE3/MV82NDAuanBn"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">CLASS 12</p>
          <span className="italic text-sm">class 12 science</span>
          <a
            href="#"
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
}
