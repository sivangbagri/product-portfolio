import React from "react";
import hero from "../static/hero2.png";
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <div className="flex bg-custom-hover justify-between p-16 font-poppins mt-5">
      <div>
        <div>
          <p className="text-8xl font-semibold "> Ready to </p>
          <p className="text-8xl font-semibold text-custom-text ">
            {" "}
            Build.{" "}
          </p>
        </div>
        <div className="w-96 my-4 text-para">
          <p>
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
        <img src={hero} className="w-[400px] h-[600px] " />
      </div>
    </div>
  );
}
