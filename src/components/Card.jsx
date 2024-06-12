import React from "react";

export default function Card({ logo, title, content, type, date, tags }) {
  return (
    <>
      <div
        className={`font-poppins bg-white ${
          type === "big" ? `w-120 p-0` : `w-72 p-5`
        } h-auto`}
      >
        <div>
          <img
            className={`${type === "big" ? `w-full h-56 md:rounded-sm rounded-lg` : `size-36`}`}
            src={logo}
          />
        </div>
        <div className="">
          <p className={`my-2 font-semibold ${type === "big" ? `text-lg`:`text-2xl`}`}>{title}</p>
          <div className="flex flex-wrap  text-xs gap-2 text-white">{tags && tags.map((ele) =>
              <p key={ele} className="flex bg-[#7dd3fc] p-2 rounded-md font-light h-7 items-center text-xs" > {ele} </p>
          
          )}</div>
          {content && (
            <p className=" font-normal text-custom-text">{content}</p>
          )}
        </div>
        <div className="flex justify-end">
          <p className=" font-normal text-[#52525b] text-sm mt-10">{date}</p>
        </div>
      </div>
    </>
  );
}
