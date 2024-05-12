import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import MechanicsClass12 from "../subjects/class-12-science/MechanicsClass12";
import HeatAndThermodynamicsClass12 from "../subjects/class-12-science/HeatAndThermodynamicsClass12";
import WaveOpticsClass12 from "../subjects/class-12-science/WaveOpticsClass12";
import WavesAndSoundClass12 from "../subjects/class-12-science/WavesAndSoundClass12";
import CurrentElectricity from "../subjects/class-12-science/CurrentElectricity";
import MagnetismCLass12 from "../subjects/class-12-science/MagnetismCLass12";
import ModernPhysicsClass12 from "../subjects/class-12-science/ModernPhysicsClass12";
export default function ClassXII() {
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
// h-screen 
  return (
    <div className="bg-slate-900 relative">
      {!sidebarOpen && (
        <button className="absolute top-2  left-2 z-20" onClick={toggleSidebar}>
          <HiMenu className="text-3xl  absolute top-0 left-0      bg-zinc-600 rounded-md text-white" />
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
            <h1 className="border-b-4 mb-3 mt-5 bg-yellow-200 border-blue-600">
              Class-12 (science)
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
                      onClick={() => handleContentSelection("waveOptics")}
                    >
                      WAVE OPTICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("heatAndThermodynamics")
                      }
                    >
                      HEAT AND THERMODYNAMICS
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("waveAndSound")}
                    >
                      WAVE AND SOUND
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() =>
                        handleContentSelection("currentElectricity")
                      }
                    >
                      {" "}
                      Current Electricity
                    </li>
                    <li
                      className="m-1 cursor-pointer hover:bg-green-400"
                      onClick={() => handleContentSelection("magnetism")}
                    >
                      MAGNETISM
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
      <div className=" bg-slate-900  p-6">
        {selectedContent === "mechanics" && <MechanicsClass12 />}
        {selectedContent === "heatAndThermodynamics" && (
          <HeatAndThermodynamicsClass12 />
        )}
        {selectedContent === "waveOptics" && <WaveOpticsClass12 />}
        {selectedContent === "waveAndSound" && <WavesAndSoundClass12 />}
        {selectedContent === "currentElectricity" && <CurrentElectricity />}
        {selectedContent === "magnetism" && <MagnetismCLass12 />}
        {selectedContent === "modernPhysics" && <ModernPhysicsClass12 />}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { HiMenu } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// export default function ClassXII() {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   return (
//     <div className="bg-slate-900 h-auto w-full">
//        <div className="h-screen bg-slate-500">
//         <h1>Hello world</h1>
//         <div className="m-6 p-1 border-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusantium numquam earum asperiores nesciunt voluptatum quae debitis quod deleniti. Sint aliquam aspernatur quo ut, quae repellat libero ullam excepturi veritatis.
//         Quas ea esse dolor officiis distinctio fuga magni quidem, a quis molestiae fugiat eius asperiores eum culpa. Odit, suscipit voluptatum doloribus voluptas, eum deserunt nemo commodi tempora nihil beatae laboriosam.
//         Id possimus corporis excepturi sit earum. Aspernatur, consequuntur, numquam veniam iusto ipsa, id repellat quam amet fugiat natus reprehenderit quod praesentium illum. Voluptates fugiat quae expedita animi exercitationem nesciunt minima!
//         Quam, maiores omnis. Beatae veniam facilis obcaecati aperiam repellendus molestiae maxime quas fugiat odit unde? Accusamus, similique minima? Repellendus optio pariatur praesentium nesciunt similique earum recusandae tenetur? Deserunt, quibusdam eos!
//         Sapiente nisi, nemo aliquid sint commodi libero atque obcaecati officia ducimus. Ex perferendis culpa velit incidunt placeat molestiae officia unde vitae hic itaque ullam, magni tempora sequi sint assumenda laudantium.
//         Voluptas culpa sunt consequuntur perferendis, nisi quos vero enim similique tempore, hic recusandae pariatur a distinctio tempora consequatur adipisci laborum. Fuga consequatur alias sit vero repudiandae aliquam cupiditate amet odit?</div>
//        </div>
//     </div>
//   );
// }

//  /* {

//  <button className="flex items-center" onClick={toggleSidebar}>
//         <HiMenu className="text-3xl" />
//         <label className=" transition-opacity ml-2 cursor-pointer">
//           {sidebarOpen ? " Open Sidebar" : " Close Sidebar"}
//         </label>
//       </button>

//       {/* Sidebar Content */}
{
  /* <div
  style={{ height: "100vh", left: "0px", zIndex: "1" }}
  className={`w-52 bg-slate-300 text-black font-bold border-x-2 flex flex-col h-100 transition-all ${
    sidebarOpen ? "" : "transform -translate-x-full"
  }`}
>
  {" "}
  <h1 className="border-b-4 mb-3 mt-2 bg-yellow-200 border-red-600">
    {" "}
    Class-12 (science){" "}
  </h1>
//   {/* Your sidebar content goes here */
}
//   <div className="w-30 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2">
//     <details>
//       <summary className="science-button cursor-pointer">Physics</summary>
//       <div>
//         <ul className="mt-4">
//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/mechanics-class-12")}
//           >
//             MECHANICS
//           </li>

//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/waveoptics-class-12")}
//           >
//             WAVE OPTICS
//           </li>
//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/heatandthermodynamics-class-12")}
//           >
//             HEAT AND THERMODYNAMICS
//           </li>
//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/waveandsound-class-12")}
//           >
//             WAVE AND SOUND
//           </li>
//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/current-electricity-class-12")}
//           >
//             {" "}
//             Current Electricity
//           </li>
//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/magnetism-class-12")}
//           >
//             MAGNETISM
//           </li>
//           <li
//             className="m-1 cursor-pointer hover:bg-green-400"
//             onClick={() => navigate("/modernphysics-class-12")}
//           >
//             MODERN PHYSICS
//           </li>
//         </ul>
//       </div>
//     </details>
//   </div>
//   {/* Chemistry section */}
//   <div
//     className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//   >
//     <details>
//       <summary className="science-button cursor-pointer">
//         Chemistry
//       </summary>
//       <div>
//         <ul className="mt-4">
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             ORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             INORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             PHYSICAL CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             BIOCHEMISTRY
//           </li>
//         </ul>
//       </div>
//     </details>
//   </div>
//   {/* Mathematics section */}
//   <div
//     className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//   >
//     <details>
//       <summary className="science-button cursor-pointer">
//         Mathematics
//       </summary>
//       <div>
//         <ul className="mt-4">
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             ALGEBRA
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             TRIGONOMETRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             GEOMETRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             Vector
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             {" "}
//             Statistics & Probability
//           </li>
//           <li className="m-1 cursor-pointer">CALCULUS</li>
//         </ul>
//       </div>
//     </details>
//   </div>
//   {/*  */}
//   <div
//     className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//   >
//     <details>
//       <summary className="science-button cursor-pointer">
//         BIO (only bio group)
//       </summary>
//       <div>
//         <ul className="mt-4">
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             ALGEBRA
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             TRIGONOMETRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             CALCULUS
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             GEOMETRY
//           </li>
//         </ul>
//       </div>
//     </details>
//   </div>
//   {/*  */}
//   <div
//     className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//   >
//     <details>
//       <summary className="science-button cursor-pointer">Nepali</summary>
//       <div>
//         <ul className="mt-4">
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             ORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             INORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             PHYSICAL CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             BIOCHEMISTRY
//           </li>
//         </ul>
//       </div>
//     </details>
//   </div>
//   {/*  */}
//   <div
//     className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//   >
//     <details>
//       <summary className="science-button cursor-pointer">English</summary>
//       <div>
//         <ul className="mt-4">
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             ORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             INORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             PHYSICAL CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             BIOCHEMISTRY
//           </li>
//         </ul>
//       </div>
//     </details>
//   </div>
//   {/*  */}
//   <div
//     className={`w-22 h-auto bg-slate-200 mb-3 border-2 border-green-500 rounded-lg p-2
//   }`}
//   >
//     <details>
//       <summary className="science-button cursor-pointer">
//         Computer (only computer group)
//       </summary>
//       <div>
//         <ul className="mt-4">
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             ORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             INORGANIC CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             PHYSICAL CHEMISTRY
//           </li>
//           <li className="m-1 cursor-pointer hover:bg-green-400">
//             BIOCHEMISTRY
//           </li>
//         </ul>
//       </div>
//     </details>
//   </div>
// </div> */}
