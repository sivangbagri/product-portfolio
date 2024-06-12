import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

export default function Navbar() {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Why Me ? ", link: "/why-me" },

    { name: "Contact", link: "/contact" },
  ];
  return (
    <>
      <div className="bg-background flex justify-between items-center h-20 font-normal text-sm text-[#3f3f46] md:mx-14 mx-4 font-poppins">
        <div>
          <Link to="/">
            {" "}
            <img
              src="https://media.licdn.com/dms/image/D4D03AQGrP-xRycARIw/profile-displayphoto-shrink_800_800/0/1699360407028?e=1723075200&v=beta&t=Ro-NpUuxEkEx7SLiPS_8YHj2zDn74wFTif5xj3c2RRM"
              className="size-12 border-2 rounded-full"
            />
          </Link>
        </div>
        <div className="flex justify-between gap-14 ">
          {navlinks.map((item) => {
            return (
              <NavLink
                to={item.link}
                key={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-custom-text text-md font-medium hidden md:block "
                    : "text-[#52525b] text-md font-medium hidden md:block "
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-between gap-14 "></div>
          <Link to="https://linkedin.com/in/shivang-bagri">
            <p className="text-xl cursor-pointer hover:bg-custom-hover p-2 rounded-full ">
              {" "}
              <SlSocialLinkedin />
            </p>
          </Link>
          <Link to="https://github.com/sivangbagri">
            {" "}
            <p className="text-2xl  mt-1 cursor-pointer hover:bg-custom-hover p-2 rounded-full">
              <VscGithub />{" "}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
