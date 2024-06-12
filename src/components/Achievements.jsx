import React from "react";

export default function Achievements() {
  return (
    <div className="font-poppins p-16 mb-20">
      <p className="font-semibold text-xl ">ACHIEVEMENTS 😎</p>
      <div className="flex flex-wrap justify-evenly mt-10">
        <div class="relative group mb-9 md:mb-0">
          <img
            class="size-48 drop-shadow-md rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRc6zXkbySLrUVieFEtD3C96EIbnjituKiNg&s"
          />
          <div class="absolute inset-0 size-48 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <p class="text-white text-md text-center font-semibold">
              The annual business festival of IIT Bombay
            </p>
          </div>
          <p class="text-center mt-4 font-semibold">Gold 🥇</p>
          <p className="text-center ">Prod-o-mania IIT-B</p>

        </div>

        <div>
          <div class="relative group mb-9 md:mb-0">
            <img
              className="size-48 drop-shadow-md rounded-xl"
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6133545ea74ee_TRBS_logo.jpeg"
            ></img>
            <div class="absolute inset-0 size-48 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <p class="text-white text-md text-center font-semibold">
                Biggest management symposium hosted by IIM-A
              </p>
            </div>
            <p className="text-center mt-4 font-semibold">
              National Finalist 🏆
            </p>
            <p className="text-center ">TRBS IIM-A </p>
          </div>
        </div>

        <div>
          <div class="relative group mb-9 md:mb-0">
            <img
              className="size-48 drop-shadow-md rounded-xl"
              src="https://media.licdn.com/dms/image/C560BAQHciTwKdcCUpg/company-logo_200_200/0/1631353255109?e=2147483647&v=beta&t=qC-hjuRVL2iuhplt9YpF7OMpOX9NdcnZUWpOTfGcqtY"
            ></img>
            <div class="absolute inset-0 size-48 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              <p class="text-white text-md text-center font-semibold">
              Global Competition shARE IIT Delhi, in association with PokerBaazi .
              </p>
            </div>
            <p className="text-center mt-4 font-semibold">
              National Finalist 🏆
            </p>
            <p className="text-center ">All-in Strategy IIT-D</p>
          </div>
        </div>
      </div>
    </div>
  );
}
