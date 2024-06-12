import React from "react";
import { Link } from "react-router-dom";
import img1 from "../static/img1.jpg";
import img2 from "../static/img2.jpg";
import img3 from "../static/img3.jpg";
import img4 from "../static/img4.jpg";
import img5 from "../static/img5.jpg";
import img6 from "../static/img6.jpg";
const reasons = [
  {
    title: "Work Experience of working on Real-Life Challenges",
    desc: "Product Intern at Kolkata based funded startup flutrr where I worked closely on improving the user engagement and monetization metrics for Flutrr, designed and implemented a structured questionnaire aimed at the youth demographic to address objectives of increasing matches.  Collaborated cross-functionally with the design team and CPO, contributing to the  development and refinement of UI/UX enhancements. ",
  },
  {
    title: "Diverse Industry Projects and Case Studies",
    desc: "From the very beginning of my college I started indulging myself in Product case competition where I ",
  },
  {
    title: "Tech exposure and hands-on experience",
    desc: "",
  },
  {
    title: "Achievements That Guarantee Confidence in My Abilities…",
    desc: "",
  },
];

export default function WhyMe() {
  return (
    <div className="mx-14 bg-custom-hover  p-16 font-poppins mt-5 ">
      <div className="text-5xl font-semibold text-center">
        Why to choose <span className="text-custom-text ml-2"> me?</span>
      </div>

      <div className=" rounded-md p-3 border-2 my-7 transition duration-300 ease-in-out hover:border-[#009ACC] cursor-pointer">
        <div className="text-xl font-semibold">
          <p>
            1️⃣ Work Experience of working on{" "}
            <span className="text-custom-text">Real-Life Challenges</span>{" "}
          </p>
        </div>
        <div className=" mt-3 text-[#3f3f46] transition-all duration-300">
          <p>
            Product Intern at Kolkata based funded startup{" "}
            <span className=" font-semibold "> flutrr</span> (a dating platform)
            where I worked closely on improving the
            <span className="font-semibold">
              {" "}
              user engagement and monetization metrics{" "}
            </span>
            for Flutrr, designed and implemented a structured questionnaire
            aimed at the youth demographic to address objectives of{" "}
            <span className=" font-semibold "> increasing matches</span>.
            Collaborated cross-functionally with the design team and CPO,
            contributing to the development and refinement of{" "}
            <span className="font-semibold">UI/UX </span>
            enhancements.
          </p>
          <p className="mt-4">
            SEO Consultant at{" "}
            <span className="font-semibold">Samson Consulting </span>, a
            cosulting firm. Executed a
            <span className="font-semibold">
              {" "}
              comprehensive SEO upliftement plan
            </span>{" "}
            for{" "}
            <span className="text-blue-500 italic">
              {" "}
              samsonconsultant.com
            </span>{" "}
            and
            <span className="text-blue-500 italic"> samsonlms.com</span>,
            resulting in a remarkable enhancement of the
            <span className="font-semibold"> SEO score by 60% </span>. Optimized
            meta tags on each page, including title, content, and description,
            and integrated{" "}
            <span className="font-semibold">open graph tags </span>for Facebook,
            Twitter, and LinkedIn to enhance social media visibility
          </p>
        </div>
      </div>

      <div className=" rounded-md p-3 border-2 my-7 hover:border-[#009ACC] cursor-pointer  transition duration-300 ease-in-out">
        <div className="text-xl font-semibold">
          <p>
            2️⃣ Diverse Industry{" "}
            <span className="text-custom-text">Projects</span> and Case Studies{" "}
          </p>
        </div>
        <div className=" mt-3 text-[#3f3f46] transition-all duration-300">
          <p>
            From the very beginning of my college I started indulging myself in
            Product case competition where I worked on diverse problem
            statements and industries. The experince taught me teamwork and how
            to really present your ideas. Through my projects I have touched
            industries like b2c , real money gaming , ecommerce , PersonalCare ,
            etc.
          </p>
        </div>
      </div>
      <div className=" rounded-md p-3 border-2 my-7 hover:border-[#009ACC] cursor-pointer  transition duration-300 ease-in-out">
        <div className="text-xl font-semibold">
          <p>
            3️⃣ Tech exposure and{" "}
            <span className="text-custom-text">hands-on</span> experience
          </p>
        </div>
        <div className=" mt-3 text-[#3f3f46] transition-all duration-300">
          <p>
            Technical Exposure includes workking with tech stack including
            React.js , Next.js , Django , JS, Python , TailwindCSS, C++ . I have
            worked on diverse projects which can be found{" "}
            <Link
              to="https://github.com/sivangbagri"
              className="text-blue-500 italic"
            >
              here
            </Link>
            . Long with this I have done intermediate level Data Structures and
            Algorithm.
          </p>
        </div>
      </div>
      <div className=" rounded-md p-3 border-2 my-7 hover:border-pink-600 cursor-pointer  transition duration-300 ease-in-out">
        <div className="text-xl font-semibold">
          <p className="mb-4">🤩 Bonus ( PoW )</p>
        </div>
        <div className=" grid grid-cols-3">
          <img src={img1} className="transform -rotate-90   size-80" />
          <img src={img2} className=" size-80 -rotate-90 " />
          <img src={img3} className=" size-80  -rotate-90 " />
          <img src={img4} className=" size-80 " />
          <img src={img5} className=" size-80 " />
          <img src={img6} className=" size-80 " />
        </div>
      </div>
    </div>
  );
}
