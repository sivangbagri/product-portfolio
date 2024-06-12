import React from "react";
import flutrr from "../static/flutrr.jpg";

export default function Icon({ name }) {
  return (
    <div>
      {name == "Flutrr" && <img src={flutrr} className="rounded-full" />}
      {name == "Samson" && <img src="https://media.licdn.com/dms/image/D4D0BAQFmNrVBhnTv7g/company-logo_200_200/0/1685351446025?e=1726099200&v=beta&t=OIPYmpgRdnLuZhm7Yi9CuG7GCHp6vRggy4mOqGqqk6I" className="rounded-full" />}
    </div>
  );
}
