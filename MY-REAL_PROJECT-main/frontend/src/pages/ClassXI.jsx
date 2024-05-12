import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import MechanicsClass11 from "../subjects/class-11-science/MechanicsClass11";
import ElectrostaticClass11 from "../subjects/class-11-science/ElectrostaticsClass11";
import GeometricOptics from "../subjects/class-11-science/GeometricOptics";
import HeatAndThermodynamicsClass11 from "../subjects/class-11-science/HeatAndThermodynamicsClass11";
import ModernPhysicsClass11 from "../subjects/class-11-science/ModernPhysicsClass11";

export default function ClassXI() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("mechanics");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const handleContentSelection = (content) => {
    setSelectedContent(content);
    // closeSidebar(); // Close the sidebar after selecting the content
  };

  return (
    <div className="bg-slate-900   relative">
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
          <div>
            <h1 className="border-b-4 mb-3 mt-5 bg-yellow-200 border-blue-600">
              Class-11 (science)
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
                      onClick={() => handleContentSelection("geometricOptics")}
                    >
                      Geometric Optics
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("heatAndThermodynamics")
                      }
                    >
                      THERMODYNAMICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("electrostatics")}
                    >
                      ELECTROSTATICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("modernPhysics")}
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
{/* english  */}

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
            {/*  nepali*/}

            
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

          </div>
        </div>
      </aside>
      <div className="  bg-slate-900  p-6">
        {/* Main content */}
        {selectedContent === "mechanics" && <MechanicsClass11 />}
        {selectedContent === "geometricOptics" && <GeometricOptics />}
        {selectedContent === "heatAndThermodynamics" && (<HeatAndThermodynamicsClass11 />)}
        {selectedContent === "electrostatics" && <ElectrostaticClass11 />}
        {selectedContent === "modernPhysics" && <ModernPhysicsClass11 />}
        {/* add other chemistry and math */}
      </div>
    </div>
  );
}

///   other code add same method and so on

// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import MechanicsClass11 from "../subjects/class-11-science/MechanicsClass11";
// import  ElectrostaticClass11 from "../subjects/class-11-science/ElectrostaticsClass11"
// import GeometricOptics from "../subjects/class-11-science/GeometricOptics"
// import HeatAndThermodynamicsClass11 from "../subjects/class-11-science/HeatAndThermodynamicsClass11"
// import ModernPhysicsClass11 from "../subjects/class-11-science/ModernPhysicsClass11"
// export default function ClassXI() {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [courseOpen , setCourseClose] =useState(false)
// const toggleCourse = ()=>{
//   setCourseClose(!courseOpen)
// }
 

// const handleContentSelection = (content) => {
//   setSelectedContent(content);
//   closeSidebar(); // Close the sidebar after selecting the content
// };


//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="bg-slate-900 h-screen relative">
//       {!sidebarOpen && (
//         <button className="absolute top-2 left-2 z-20" onClick={toggleSidebar}>
//           <HiMenu className="text-3xl absolute top-0 left-0 text-white" />
//         </button>
//       )}

//       <aside
//         className={`absolute top-0 left-0  bg-slate-300 text-black font-bold border-x-2 transition-all ${
//           sidebarOpen ? "" : "transform -translate-x-full"
//         } z-10`}
//         style={{ width: "200px", height: "100vh" }}
//       >
//         {sidebarOpen && (
//           <button
//             className="absolute  right-0  bg-blue-600 rounded-2xl"
//             onClick={closeSidebar}
//           >
//             <HiX className="text-3xl text-red-600 mb-2text-red-600" />
//           </button>
//         )}

//         <div className="py-4 px-2">
//           <div
//           // style={{ height: "100vh", left: "0px", zIndex: "1" }}
//           // className={`w-52 bg-slate-300 text-black font-bold border-x-2 flex flex-col h-100 transition-all ${
//           //   sidebarOpen ? "" : "transform -translate-x-full"
//           // }`}
//           >
//             <h1 className="border-b-4 mb-3 mt-5 bg-yellow-200 border-blue-600">
//               Class-11 (science)
//             </h1>

//             <div className="w-30 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2">
//               <details>
//                 <summary className="science-button cursor-pointer">
//                   Physics
//                 </summary>
//                 <div>
//                   <ul className="mt-4">
//                     <li
//                       className="m-1 cursor-pointer hover:bg-green-400"
//                     >
//                       MECHANICS
//                     </li>
//                     <li
//                       className="m-1 cursor-pointer hover:bg-green-400"
//                       onClick={() => navigate("/geometric-optics")}
//                     >
//                       Geometric Optics
//                     </li>

//                     <li
//                       className="m-1 cursor-pointer hover:bg-green-400"
//                       onClick={() =>
//                         navigate("/heatandthermodynamics-class-11")
//                       }
//                     >
//                       THERMODYNAMICS
//                     </li>
//                     <li
//                       className="m-1 cursor-pointer hover:bg-green-400"
//                       onClick={() => navigate("/electrostatic-class-11")}
//                     >
//                       ELECTROSTATICS
//                     </li>
//                     <li
//                       className="m-1 cursor-pointer hover:bg-green-400"
//                       onClick={() => navigate("/modern-physics-class-11")}
//                     >
//                       MODERN PHYSICS
//                     </li>
//                   </ul>
//                 </div>
//               </details>
//             </div>
//             {/* Chemistry section */}

//             <div
//               className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//               }`}
//             >
//               <details>
//                 <summary className="science-button cursor-pointer">
//                   Chemistry
//                 </summary>
//                 <div>
//                   <ul className="mt-4">
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       ORGANIC CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       INORGANIC CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       PHYSICAL CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       BIOCHEMISTRY
//                     </li>
//                   </ul>
//                 </div>
//               </details>
//             </div>
  //           {/* Mathematics section */}

  //           <div
  //             className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  // }`}
  //           >
  //             <details>
  //               <summary className="science-button cursor-pointer">
  //                 Mathematics
  //               </summary>
  //               <div>
  //                 <ul className="mt-4">
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     ALGEBRA
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     TRIGONOMETRY
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     GEOMETRY
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     Vector
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     {" "}
  //                     Statistics & Probability
  //                   </li>
  //                   <li className="m-1 cursor-pointer">CALCULUS</li>
  //                 </ul>
  //               </div>
  //             </details>
  //           </div>
//             {/*  */}
//             <div
//               className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//             >
//               <details>
//                 <summary className="science-button cursor-pointer">BIO</summary>
//                 <div>
//                   <ul className="mt-4">
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       ALGEBRA
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       TRIGONOMETRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       CALCULUS
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       GEOMETRY
//                     </li>
//                   </ul>
//                 </div>
//               </details>
//             </div>
//             {/*  */}
//             <div
//               className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//             >
//               <details>
//                 <summary className="science-button cursor-pointer">
//                   Nepali
//                 </summary>
//                 <div>
//                   <ul className="mt-4">
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       ORGANIC CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       INORGANIC CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       PHYSICAL CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       BIOCHEMISTRY
//                     </li>
//                   </ul>
//                 </div>
//               </details>
//             </div>
//             {/*  */}



  //           <div
  //             className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
  // }`}
  //           >
  //             <details>
  //               <summary className="science-button cursor-pointer">
  //                 English
  //               </summary>
  //               <div>
  //                 <ul className="mt-4">
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     ORGANIC CHEMISTRY
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     INORGANIC CHEMISTRY
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     PHYSICAL CHEMISTRY
  //                   </li>
  //                   <li className="m-1 cursor-pointer hover:bg-green-400">
  //                     BIOCHEMISTRY
  //                   </li>
  //                 </ul>
  //               </div>
  //             </details>
  //           </div>
//             {/*  */}



//             <div
//               className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//             >
//               <details>
//                 <summary className="science-button cursor-pointer">
//                   Computer
//                 </summary>
//                 <div>
//                   <ul className="mt-4">
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       ORGANIC CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       INORGANIC CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       PHYSICAL CHEMISTRY
//                     </li>
//                     <li className="m-1 cursor-pointer hover:bg-green-400">
//                       BIOCHEMISTRY
//                     </li>
//                   </ul>
//                 </div>
//               </details>
//             </div>
//           </div>
//         </div>
//       </aside>
//        <div className="  bg-slate-900  p-6">  
//          {/* Main content */}
//          {/* {selectedContent === 'mechanics' && <MechanicsClass11 />}
//         {selectedContent === 'geometricOptics' && <GeometricOptics />}
//         {selectedContent === 'heatAndThermodynamics' && <HeatAndThermodynamicsClass11 />}
//         {selectedContent === 'electrostatics' && <ElectrostaticClass11 />}
//         {selectedContent === 'modernPhysics' && <ModernPhysicsClass11 />} */}
//         </div> 
//     </div>
//   );
// }
 