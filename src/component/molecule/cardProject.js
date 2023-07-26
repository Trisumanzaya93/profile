import React from "react";
import Image from "./image";
// import tri from '../../assets/img/tri.png'

function cardProject({project}) {
  return (
    <div className="shadow-md w-full rounded-lg bg-white px-5 pt-5 mb-10 pb-5 ">
      <div className=" mb-5">
        <h1 className="font-primary font-bold text-2xl">{project.title} </h1>
        <h1 className=" mt-5">{project.desc}</h1>
      </div>
      <div className="flex overflow-x-scroll">
      <div
          className="flex flex-nowrap "
        >
        {project.imageProject.map((item,idx)=>{
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
