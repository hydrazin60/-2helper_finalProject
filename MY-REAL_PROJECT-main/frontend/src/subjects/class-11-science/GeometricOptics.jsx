import React from 'react'

export default function GeometricOptics() {
  return (
    <div>
   <div className="grid  grid-cols-1 m-10  mb-24 sm:grid-cols-2   gap-10   flex-col    px-3 max-w-6xl mx-auto">
    <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
      <img
        src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cover post photo"
        className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        onClick={() => navigate("/class-xi")}
      />             
      {/*   */}
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">Light </p>
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
        src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cover post photo"
        className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        onClick={() => navigate("/class-xi")}
      />
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">lences</p>
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
        src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cover post photo"
        className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        onClick={() => navigate("/class-xi")}
      />
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">Prisma</p>
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
        src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cover post photo"
        className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        onClick={() => navigate("/class-xi")}
      />
       <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2"> speed of light</p>
        <span className="italic text-sm">class 11 science</span>
        <span
          onClick={() => navigate("/class-xi")}
          className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
        >
          Open
        </span>
      </div>
    </div>
     </div>  
    </div>
  )
}
