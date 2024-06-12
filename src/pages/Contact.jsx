import React from "react";
import { Link } from "react-router-dom";
import mail from "../static/mail.gif"
import hero4 from "../static/hero4.png"
export default function Contact() {
  return (
    <div className="text-center bg-custom-hover justify-center p-16 font-poppins mt-5 ">
    
      <div className="text-5xl font-semibold">
        Yeah ! Its time to <span className="text-custom-text ml-2"> connect.</span> 
        
      </div>
      <div className="text-center">
      <img src={mail} className="size-24 mx-auto"/>
      <Link to="mailto:sivangbagri@gmail.com?subject=Hii Shivang" className="cursor-pointer font-medium hover:opacity-80 text-xl"> Send me an <span className="underline">email</span> </Link>
      

      </div>
      <div className="flex justify-center">
      <img src={hero4} className="size-48 " />
      </div>

      
    </div>
  );
}
