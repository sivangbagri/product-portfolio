import React from "react";
import hero from "../static/hero2.png";
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <div className="flex flex-wrap bg-custom-hover justify-between md:p-16 p-5 font-poppins mt-5">
      <div>
        <div>
          <p className="md:text-8xl text-5xl font-semibold "> Ready to </p>
          <p className="md:text-8xl text-5xl font-semibold text-custom-text ">
            {" "}
            Build.{" "}
          </p>
        </div>
        <div className="md:w-96 w-80 my-4 text-para">
          <p className="">
            An undergrad from IIT-BHU passionate about user experience and crafting amazing products.
            {" "}
            Always ready for the next big challenge—bring it on ! ✨
            
          </p>
          <Link to="/projects">
            {" "}
            <button className="bg-custom-text text-white py-3 px-7 mt-7 text-sm hover:opacity-90 transition duration-300 ease-in-out">
              My Projects
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={hero} className="md:w-[400px] md:h-[600px] mt-5 md:mt-0 " />
      </div>
    </div>
  );
}
