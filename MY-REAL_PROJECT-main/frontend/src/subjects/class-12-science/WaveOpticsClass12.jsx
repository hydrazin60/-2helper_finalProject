import React from "react";

export default function WaveOpticsClass12() {
  return (
    <div className="grid  grid-cols-1 m-10  mb-24 sm:grid-cols-2   gap-10   flex-col    px-3 max-w-6xl mx-auto">
      <div className="group relative border  border-teal-500 hover:border-2 overflow-hidden rounded-lg transition-all cursor-pointer">
        <img
          src="https://imgs.search.brave.com/3HfoD5mo-HbdfREv-pfZithyF-HmfpdWHVeYtS05Ns0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExL2Rk/LzM1L2ExZGQzNTll/YjVmNzY3YjkxZDg1/YmQyZTUwMjlkNGFm/LmpwZw"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/class-xi")}
        />
        {/*   */}
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">InterEncee</p>
          <span className="italic text-sm">class 12 science</span>
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
          src="https://imgs.search.brave.com/At2SbI7JkZURW3AywZEO0_KqB3X2YVAuHarda69D-Og/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTg4ODY0ODczMjUt/ZjY2NTAzMmI2MzUy/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OGJt/RjBkWEpsSlRJd2FX/MWhaMlZ6ZkdWdWZE/QjhmREI4Zkh3dw.jpeg"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/class-xi")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">Diffraction</p>
          <span className="italic text-sm">class 12 science</span>
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
          src="https://imgs.search.brave.com/fKSsjKsdPktvJK1lr3ObGPm225XChx9PIqDMbKXb9DE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2M1/Lzk1L2ZlYzU5NTZj/ZWRkMjgzOTZhZGJj/MDg5ZTdjZjAzMDRm/LmpwZw"
          alt="cover post photo"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          onClick={() => navigate("/class-xi")}
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">Polaration</p>
          <span className="italic text-sm">class 12 science</span>
          <span
            onClick={() => navigate("/class-xi")}
            className="group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 cursor-pointer"
          >
            Open
          </span>
        </div>
      </div>
    </div>
  );
}
