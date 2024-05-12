import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import ClassXI from "./pages/ClassXI";
import ClassXII from "./pages/ClassXII";
import Entrance from "./pages/Entrance";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Science from "./components/Science";
import Management from "./components/Management";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import ManagmentClassXI from "./pages/ManagmentClassXI";
import ManagmentClassXII from "./pages/ManagmentClassXII";
import OldIsGold from "./components/OldIsGold";
import MechanicsClass11 from "./subjects/class-11-science/MechanicsClass11";
import HeatAndThermodynamicsClass11 from "./subjects/class-11-science/HeatAndThermodynamicsClass11";
import GeometricOptics from "./subjects/class-11-science/GeometricOptics";
import ElectrostaticsClass11 from "./subjects/class-11-science/ElectrostaticsClass11";
import ModernPhysicsClass11 from "./subjects/class-11-science/ModernPhysicsClass11";
//
import MagnetismCLass12 from "./subjects/class-12-science/MagnetismCLass12";
import HeatAndThermodynamicsClass12 from "./subjects/class-12-science/HeatAndThermodynamicsClass12";
import MechanicsClass12 from "./subjects/class-12-science/MechanicsClass12";
import WavesAndSoundClass12 from "./subjects/class-12-science/WavesAndSoundClass12";
import ModernPhysicsClass12 from "./subjects/class-12-science/ModernPhysicsClass12";
import WaveOpticsClass12 from "./subjects/class-12-science/WaveOpticsClass12";
import CurrentElectricity from "./subjects/class-12-science/CurrentElectricity";
import OldIsGoldClass11SCIENCE from "./pages/OldIsGoldClass11SCIENCE";
import OldIsGoldClass12SCIENCE from "./pages/OldIsGoldClass12SCIENCE";
import OldIsGoldClass11MANAGMENT from "./pages/OldIsGoldClass11MANAGMENT";
import OldIsGoldClass12MANAGMENT from "./pages/OldIsGoldClass12MANAGMENT";
import ElectrostaticsClass11OldISGOld from "./subjects/old-is-gold-class-11-science/physics/ElectrostaticsClass11OldISGOld"
import GeometricOpticsClass11OldISGOld from "./subjects/old-is-gold-class-11-science/physics/GeometricOpticsClass11OldISGOld"
import MechanicsClass11OldISGOld from "./subjects/old-is-gold-class-11-science/physics/MechanicsClass11OldISGOld"
import ModernPhysicsClass11OldISGOld from "./subjects/old-is-gold-class-11-science/physics/ModernPhysicsClass11OldISGOld"
import ThermoDynamicsClass11OldISGOld from "./subjects/old-is-gold-class-11-science/physics/ThermoDynamicsClass11OldISGOld"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />}></Route>
          <Route path="/managment" element={<Management />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/class-xi" element={<ClassXI />} />
          <Route path="/class-xii" element={<ClassXII />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/managment-class-xi" element={<ManagmentClassXI />} />
          <Route path="/managment-class-xii" element={<ManagmentClassXII />} />
          <Route path="/oldis-gold" element={<OldIsGold />} />
          {/*class-11  */}
          <Route path="/mechanics-class-11" element={<MechanicsClass11 />} />
          <Route
            path="/heatandthermodynamics-class-11"
            element={<HeatAndThermodynamicsClass11 />}
          />
          <Route path="/geometric-optics" element={<GeometricOptics />} />
          <Route
            path="/electrostatic-class-11"
            element={<ElectrostaticsClass11 />}
          />
          <Route
            path="/modern-physics-class-11"
            element={<ModernPhysicsClass11 />}
          />
          {/* classs-12 */}
          <Route path="/mechanics-class-12" element={<MechanicsClass12 />} />
          <Route
            path="/heatandthermodynamics-class-12"
            element={<HeatAndThermodynamicsClass12 />}
          />
          <Route path="/waveoptics-class-12" element={<WaveOpticsClass12 />} />
          <Route path="/magnetism-class-12" element={<MagnetismCLass12 />} />
          <Route
            path="/waveandsound-class-12"
            element={<WavesAndSoundClass12 />}
          />
          <Route
            path="/modernphysics-class-12"
            element={<ModernPhysicsClass12 />}
          />
          <Route
            path="/current-electricity-class-12"
            element={<CurrentElectricity />}
          />
          {/*  old is gold page */}
          <Route
            path="/oldisgold-class-11-science"
            element={<OldIsGoldClass11SCIENCE />}
          />
          <Route
            path="/oldisgold-class-12-science"
            element={<OldIsGoldClass12SCIENCE />}
          />
          <Route
            path="/oldisgold-class-11-managment"
            element={<OldIsGoldClass11MANAGMENT />}
          />
          <Route
            path="/oldisgold-class-12-managment"
            element={<OldIsGoldClass12MANAGMENT />}
          />
          {/*  old is gold Physics class 11 */}
          <Route
            path="/oldisgold-class-11-electrostatics"
            element={<ElectrostaticsClass11OldISGOld />}
          />
          <Route
            path="/oldisgold-class-11-geometricoptics"
            element={<GeometricOpticsClass11OldISGOld />}
          />
          <Route
            path="/oldisgold-class-11-mechanics"
            element={<MechanicsClass11OldISGOld />}
          />
          <Route
            path="/oldisgold-class-11-modernPhysics"
            element={<ModernPhysicsClass11OldISGOld />}
          />
          <Route
            path="/oldisgold-class-11-thermodynamics"
            element={<ThermoDynamicsClass11OldISGOld />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
