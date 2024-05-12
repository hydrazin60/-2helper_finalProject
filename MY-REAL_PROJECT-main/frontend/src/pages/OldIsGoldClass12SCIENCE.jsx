import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import CurrentElectricityClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/CurrentElectricityClass12OldIsGold";
import HeatAndThermodynamicsClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/HeatAndThermodynamicsClass12OldIsGold";
import MagnetismClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/MagnetismClass12OldIsGold";
import MechanicsClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/MechanicsClass12OldIsGold";
import ModernPhysicsClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/ModernPhysicsClass12OldIsGold";
import WaveAndSoundClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/WaveAndSoundClass12OldIsGold";
import WaveOpticsClass12OldIsGold from "../subjects/old-is-gold-class-12-science/physics/WaveOpticsClass12OldIsGold";
export default function OldIsGoldClass12SCIENCE() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("mechanics-class-12");
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
    <div className="bg-slate-900  relative">
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
            className="absolute  right-0  bg-blue-600 rounded-2xl"
            onClick={closeSidebar}
          >
            <HiX className="text-3xl text-red-600 mb-2text-red-600" />
          </button>
        )}

        <div className="py-4 px-2">
          <div
          // style={{ height: "100vh", left: "0px", zIndex: "1" }}
          // className={`w-52 bg-slate-300 text-black font-bold border-x-2 flex flex-col h-100 transition-all ${
          //   sidebarOpen ? "" : "transform -translate-x-full"
          // }`}
          >
            <h1 className="border-b-4 mb-3 mt-5 bg-yellow-200 border-red-600">
              {" "}
              NEB SOLUTION // Class 12 science
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
                      onClick={() =>
                        handleContentSelection("mechanics-class-12")
                      }
                    >
                      MECHANICS
                    </li>

                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("waveoptics-class-12")
                      }
                    >
                      WAVE OPTICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("heatandthermodynamics-class-12")
                      }
                    >
                      HEAT AND THERMODYNAMICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("waveandsound-class-12")
                      }
                    >
                      WAVE AND SOUND
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("current-electricity-class-12")
                      }
                    >
                      {" "}
                      Current Electricity
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("magnetism-class-12")
                      }
                    >
                      MAGNETISM
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("modernphysics-class-12")
                      }
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
            {/*  */}
            <div
              className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  }`}
            >
              <details>
                <summary className="science-button cursor-pointer">
                  BIO (only bio group)
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
                      CALCULUS
                    </li>
                    <li className="m-1 cursor-pointer hover:bg-green-400">
                      GEOMETRY
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            {/*  */}
            <div
              className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  }`}
            >
              <details>
                <summary className="science-button cursor-pointer">
                  Nepali
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
            {/*  */}
            <div
              className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  }`}
            >
              <details>
                <summary className="science-button cursor-pointer">
                  English
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
            {/*  */}
            <div
              className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  }`}
            >
              <details>
                <summary className="science-button cursor-pointer">
                  Computer (only computer group)
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
          </div>
        </div>
      </aside>
      <div className="h-screen    bg-slate-900  p-6">
        {selectedContent === "current-electricity-class-12" && (
          <CurrentElectricityClass12OldIsGold />
        )}
        {selectedContent === "heatandthermodynamics-class-12" && (
          <HeatAndThermodynamicsClass12OldIsGold />
        )}
        {selectedContent === "magnetism-class-12" && (
          <MagnetismClass12OldIsGold />
        )}
        {selectedContent === "mechanics-class-12" && (
          <MechanicsClass12OldIsGold />
        )}
        {selectedContent === "modernphysics-class-12" && (
          <ModernPhysicsClass12OldIsGold />
        )}
        {selectedContent === "waveandsound-class-12" && (
          <WaveAndSoundClass12OldIsGold />
        )}
        {selectedContent === "waveoptics-class-12" && (
          <WaveOpticsClass12OldIsGold />
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { HiMenu } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// export default function   OldIsGoldClass12SCIENCE() {
//   const navigate = useNavigate();
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
//         className={`w-52 bg-slate-300  text-black font-bold border-x-2 flex flex-col h-100 transition-all ${
//           sidebarOpen ? "" : "transform -translate-x-full"
//         }`}
//       >
//         {/* Your sidebar content goes here */}
//         <h1 className="border-b-4 mb-3 mt-2 bg-yellow-200 border-red-600"> NEB SOLUTION // Class 12 science</h1>

//         <div className="w-30 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2">
//           <details>
//             <summary className="science-button cursor-pointer">Physics</summary>
//             <div>
//               <ul className="mt-4">
//                 <li
//                   className="m-1 cursor-pointer hover:bg-green-400"
//                   onClick={() => navigate("/mechanics-class-11")}
//                 >
//                   MECHANICS
//                 </li>
//                 <li
//                   className="m-1 cursor-pointer hover:bg-green-400"
//                   onClick={() => navigate("/geometric-optics")}
//                 >
//                   Geometric Optics
//                 </li>

//                 <li
//                   className="m-1 cursor-pointer hover:bg-green-400"
//                   onClick={() => navigate("/heatandthermodynamics-class-11")}
//                 >
//                   THERMODYNAMICS
//                 </li>
//                 <li
//                   className="m-1 cursor-pointer hover:bg-green-400"
//                   onClick={() => navigate("/electrostatic-class-11")}
//                 >
//                   ELECTROSTATICS
//                 </li>
//                 <li
//                   className="m-1 cursor-pointer hover:bg-green-400"
//                   onClick={() => navigate("/modern-physics-class-11")}
//                 >
//                   MODERN PHYSICS
//                 </li>
//               </ul>
//             </div>
//           </details>
//         </div>

//         {/* Chemistry section */}
//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//         }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">
//               Chemistry
//             </summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   ORGANIC CHEMISTRY
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   INORGANIC CHEMISTRY
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   PHYSICAL CHEMISTRY
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   BIOCHEMISTRY
//                 </li>
//               </ul>
//             </div>
//           </details>
//         </div>
//         {/* Mathematics section */}
//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//         }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">
//               Mathematics
//             </summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   ALGEBRA
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   TRIGONOMETRY
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   GEOMETRY
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   Vector
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   {" "}
//                   Statistics & Probability
//                 </li>
//                 <li className="m-1 cursor-pointer">CALCULUS</li>
//               </ul>
//             </div>
//           </details>
//         </div>
//         {/*  */}
//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//         }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">
//               BIO (only bio group)
//             </summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   ALGEBRA
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   TRIGONOMETRY
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   CALCULUS
//                 </li>
//                 <li className="m-1 cursor-pointer hover:bg-green-400">
//                   GEOMETRY
//                 </li>
//               </ul>
//             </div>
//           </details>
//         </div>
//         {/*  */}
//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//         }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">Nepali</summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer">ORGANIC CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">INORGANIC CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">PHYSICAL CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">BIOCHEMISTRY</li>
//               </ul>
//             </div>
//           </details>
//         </div>
//         {/*  */}

//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//         }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">English</summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer">ORGANIC CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">INORGANIC CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">PHYSICAL CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">BIOCHEMISTRY</li>
//               </ul>
//             </div>
//           </details>
//         </div>
//         {/*  */}

//         <div
//           className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//         }`}
//         >
//           <details>
//             <summary className="science-button cursor-pointer">
//               Computer (only computer group)
//             </summary>
//             <div>
//               <ul className="mt-4">
//                 <li className="m-1 cursor-pointer">ORGANIC CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">INORGANIC CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">PHYSICAL CHEMISTRY</li>
//                 <li className="m-1 cursor-pointer">BIOCHEMISTRY</li>
//               </ul>
//             </div>
//           </details>
//         </div>
//       </div>
//     </div>
//   );
// }
