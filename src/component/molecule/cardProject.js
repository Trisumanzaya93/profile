import React from "react";
import Image from "./image";
// import tri from '../../assets/img/tri.png'

function cardProject() {
  const imageProject= [
    'homevr.png',
    'detailvr.png',
    'historyvr.png',
    'loginvr.png',
    'paymentvr.png'
    
  ]
  return (
    <div className="shadow-md w-full rounded-sm bg-white px-5 mb-10 pb-5 ">
      <div className=" mt-5">
        <h1 className="font-primary font-bold text-2xl">Vehicle Rental </h1>
        <h1 className=" mt-5">
          Vehicle rental is a platform where vehicle owners can rent the vehicle
          and the user can rent vehicle at the nearest location, Front-end using
          framework react.js for websites and react-native for mobile apps while
          Back-end uses express.js
        </h1>
      </div>
      <div className="flex overflow-x-scroll pb-10">
      <div
          class="flex flex-nowrap "
        >
        {imageProject.map((item,idx)=>{
          return(
              <Image uri={item} key={idx} />
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default cardProject;
