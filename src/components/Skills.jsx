import React from "react";
import Card from "./Card";
import stat from "../static/stat.jpg";
import tech from "../static/tech.webp";
import design from "../static/design.jpg";
import str from "../static/str.jpg";
import { Link } from "react-router-dom";
// Link
export default function Skills() {
  return (
    <>
    

      <div className="flex flex-wrap  bg-[#ecfeff] md:justify-between justify-center md:p-16 p-5  font-poppins my-20">
        <div className="md:w-1/3">
          <p className="font-semibold text-xl ">MY SKILLS ⚙️</p>
          <div className="">
            <p className="md:leading-loose text-para mt-3">
              I am still exploring the field of Product Management and am always
              eager to learn from every experience and project. Reading about
              user psychology and behavioral patterns excites me 🔥.
              <p className="mt-3 md:block hidden">
                A book named "Hooked" has always given me a new perspective.{" "}
              </p>
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4 mt-5 md:mt-0">
          <Card
            title="Market & User Research"
            content="Market Analysis, Experiment Design,Usability Testing"
            logo={stat}
          />
          <Card
            title="Product Design"
            content="User Stories, User Flows, Wireframes, UI/UX"
            logo={design}
          />
          <Card
            title="Product Strategy"
            content="Roadmapping, Project Management"
            logo={str}
          />
          <Card
            title="Programming"
            content="Software Development and Management"
            logo={tech}
          />
        </div>
      </div>
    </>
  );
}
