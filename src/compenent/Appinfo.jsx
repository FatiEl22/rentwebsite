import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { apartements } from "../data/apartements";
import "../Styles/appinfo.css";
function Appinfo() {
  const { id } = useParams();
  const appart = apartements.find((a) => id === a.id);
  const imgPrins = useRef()

  return (
    
      <div className="infoApp">
        <img className="img" ref={imgPrins} src={appart.img} alt="dsf"/>
        <div className="cls">
          {appart.imgs.map((m) => (
            <img  alt="dm"
              onMouseEnter={(e) => {
                imgPrins.current.src = e.target.src
              }}
              onMouseLeave={() => {
                imgPrins.current.src = appart.img
              }}
              src={m}></img>
          ))}
        </div>
        <div className="styleinfo">
      <h1>{appart.name}</h1>
      <h1>{appart.address}</h1>
      <h3>{appart.descreption}</h3>
      </div>
      </div>
   
 
  );
}

export default Appinfo;
