import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ElectrostaticsEntrance from "../subjects/Entrance/physics/ElectrostaticsEntrance";
import GeometricOpticsEntrance from "../subjects/Entrance/physics/GeometricOpticsEntrance";
import MagnetismEntrance from "../subjects/Entrance/physics/MagnetismEntrance";
import MechanicsEntrance from "../subjects/Entrance/physics/MechanicsEntrance";
import ModernPhysicsEntrance from "../subjects/Entrance/physics/ModernPhysicsEntrance";
import ThermodynamicsEntrance from "../subjects/Entrance/physics/ThermodynamicsEntrance";

export default function ClassXI() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("mechanics");

  const handleContentSelection = (content) => {
    setSelectedContent(content);
     closeSidebar(); // Close the sidebar after selecting the content
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-slate-900 relative">
      {!sidebarOpen && (
        <button className="absolute top-2 left-2 z-20" onClick={toggleSidebar}>
          <HiMenu className="text-3xl absolute top-0 left-0 text-white" />
        </button>
      )}

      <aside
        className={`absolute top-0 left-0  bg-slate-300 text-black font-bold border-x-2 transition-all ${
          sidebarOpen ? "" : "transform -translate-x-full"
        } z-10`}
        style={{ width: "200px", height: "100vh" }}
      >
        {sidebarOpen && (
          <button
            className="absolute  right-0    bg-blue-600 rounded-2xl"
            onClick={closeSidebar}
          >
            <HiX className="text-3xl text-red-600 mb-2text-red-600" />
          </button>
        )}

        <div className="py-4 px-2">
          <div>
            <h1 className="border-b-4 mb-3 mt-5 lbg-yellow-200 bg-yellow-200 p-1 border-red-600">
              {" "}
              Entrance (IOE , BCA , IT , CSIT , B-IT ){" "}
            </h1>

            <div className="w-30 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2">
              <details>
                <summary className="science-button cursor-pointer">
                  Physics
                </summary>
                <div>
                  <ul className="mt-4">
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("mechanics")}
                    >
                      MECHANICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("geometric")}
                    >
                      Geometric Optics
                    </li>

                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("heatandthermodynamics")
                      }
                    >
                      THERMODYNAMICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("electrostatic")}
                    >
                      ELECTROSTATICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("magnetism")}
                    >
                      MAGNETISM
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("modernphysics")}
                    >
                      MODERN PHYSICS
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            {/* Chemistry section */}

            <div
              className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
          }`}
            >
              <details>
                <summary className="science-button cursor-pointer">
                  Chemistry
                </summary>
                <div>
                  <ul className="mt-4">
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      ORGANIC CHEMISTRY
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      INORGANIC CHEMISTRY
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      PHYSICAL CHEMISTRY
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      BIOCHEMISTRY
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            {/* Mathematics section */}

            <div
              className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  }`}
            >
              <details>
                <summary className="science-button cursor-pointer">
                  Mathematics
                </summary>
                <div>
                  <ul className="mt-4">
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      ALGEBRA
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      TRIGONOMETRY
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      GEOMETRY
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      Vector
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      {" "}
                      Statistics & Probability
                    </li>
                    <li className="m-1 cursor-pointer">CALCULUS</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </aside>
      <div className="    bg-slate-900  p-6">
        {/*  main contain */}
        {selectedContent === "electrostatic" && <ElectrostaticsEntrance />}
        {selectedContent === "geometric" && <GeometricOpticsEntrance />}
        {selectedContent === "magnetism" && <MagnetismEntrance />}
        {selectedContent === "mechanics" && <MechanicsEntrance />}
        {selectedContent === "modernphysics" && <ModernPhysicsEntrance />}
        {selectedContent === "heatandthermodynamics" && (
          <ThermodynamicsEntrance />
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { HiMenu } from "react-icons/hi";

// export default function Entrance() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="bg-slate-900">
//       <button className="flex items-center" onClick={toggleSidebar}>
//         <HiMenu className="text-3xl" />
//         <label className=" transition-opacity ml-2 cursor-pointer">
//           {sidebarOpen ? " Open Sidebar" : " Close Sidebar"}
//         </label>
//       </button>

//       {/* Sidebar Content */}
//       <div
//         style={{ height: "100vh", left: "0px" }}
//         className={`w-52 bg-slate-300 text-black font-bold border-x-2 flex flex-col h-100 transition-all ${
//           sidebarOpen ? "" : "transform -translate-x-full"
//         }`}

//       >         <h1 className="border-b-4 mb-3 mt-2 bg-yellow-200 border-red-600"> Entrance (IOE , IT , BCA  , CSIT , B-IT ) </h1>
//         {/* Your sidebar content goes here */}
//         <div className="w-30 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2">
//           <details>
//             <summary className="science-button cursor-pointer">Physics</summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer">MECHANICS</li>
//                 <li className="m-1 cursor-pointer">GEOMETRICAL OPTICS</li>
//                 <li className="m-1 cursor-pointer">WAVE OPTICS</li>
//                 <li className="m-1 cursor-pointer">HEAT AND THERMODYNAMICS</li>
//                 <li className="m-1 cursor-pointer">WAVE AND SOUND</li>
//                 <li className="m-1 cursor-pointer">ELECTROSTATICS</li>
//                 <li className="m-1 cursor-pointer">MAGNETISM</li>
//                 <li className="m-1 cursor-pointer">MODERN PHYSICS</li>
//               </ul>
//             </div>
//           </details>
//         </div>

//         {/* Chemistry section */}
// <div
//   className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
// >
//   <details>
//     <summary className="science-button cursor-pointer">
//       Chemistry
//     </summary>
//     <div>
//       <ul className="mt-4">
//         <li className="m-1 cursor-pointer">ORGANIC CHEMISTRY</li>
//         <li className="m-1 cursor-pointer">INORGANIC CHEMISTRY</li>
//         <li className="m-1 cursor-pointer">PHYSICAL CHEMISTRY</li>
//         <li className="m-1 cursor-pointer">BIOCHEMISTRY</li>
//       </ul>
//     </div>
//   </details>
// </div>
//         {/* Mathematics section */}
//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//           }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">
//               Mathematics
//             </summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer">ALGEBRA</li>
//                 <li className="m-1 cursor-pointer">TRIGONOMETRY</li>
//                 <li className="m-1 cursor-pointer">CALCULUS</li>
//                 <li className="m-1 cursor-pointer">GEOMETRY</li>
//               </ul>
//             </div>
//           </details>
//         </div>
//       </div>
//     </div>
//   );
// }
