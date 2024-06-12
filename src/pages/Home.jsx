import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
export default function Home() {
  return (
    <>
    <div className="md:mx-14 mx-4">
   
      <Hero/>
      <Skills/>
      <Experience/>
      <Achievements/>
    </div>
      
    </>
  );
}
