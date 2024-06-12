import React from "react";
import { Link } from "react-router-dom";
import hero from "../static/hero3.png";
export default function Footer() {
  return (
    <>
      <div className="bg-[#030712] font-normal text-sm text-white md:mx-14 font-poppins md:p-24 p-5  bottom-0">
        <div className="md:grid flex flex-wrap md:grid-cols-3 ">
          <div className="">
            <p className=" text-2xl md:text-4xl font-semibold">Shivang Bagri</p>
            <p className="text-lg  mt-1 text-para font-medium">
              Aspiring Product Manager
            </p>
            <p className="text-lg mt-1 text-para font-medium">
              IIT-BHU
            </p>
          </div>
          <img src={hero} className="size-80" />
          <div className="">
            <p className="text-3xl font-semibold">Lets Connect ! </p>
            <p className="text-lg mt-2 text-para font-medium">
              I am always open to connect with people in tech, learn more about
              product management, and discuss navigating this rewarding career
              path.
            </p>
            <div className="flex justify-start gap-10 mt-7">
              <Link to="https://linkedin.com/in/shivang-bagri">
                <img
                  className="size-16"
                  src="https://assets-global.website-files.com/6075e869c1ce85d8a18a162a/6075fc3986b2e466824c0aa6_linkedin-icon.svg"
                />
              </Link>
              <Link to="mailto:sivangbagri@gmail.com">
                <img
                  className="size-16"
                  src="https://assets-global.website-files.com/6075e869c1ce85d8a18a162a/6075fd6586b2e465164c0f09_gmail.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-7 pt-7 border-t-2 mt-20 border-gray-800">
          <Link className="hover:text-custom-hover cursor-pointer" to="/">
            Home
          </Link>
          <Link
            className="hover:text-custom-hover cursor-pointer"
            to="/projects"
          >
            Projects
          </Link>
          <Link className="hover:text-custom-hover cursor-pointer" to="/resume">
            Resume
          </Link>
          <Link
            className="hover:text-custom-hover cursor-pointer"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
