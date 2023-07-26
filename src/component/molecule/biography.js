import React from "react";

function Biography() {
  return (
    <div className="w-full px-10">
      <div className="flex">
        <div className="w-1/2 flex flex-col">
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Name</h1>
          </div>
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1> Place and Date of Birth</h1>
          </div>
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Residence</h1>
          </div>
          {/* <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Elementary School</h1>
          </div>
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Junior High School</h1>
          </div>
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Senior High School</h1>
          </div> */}
        </div>
        <div className="w-1/2 flex flex-col ">
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Tri Sumanzaya</h1>
          </div>
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>Natar, 22 october 1993</h1>
          </div>
          <div className=" w-full border-b-4 mt-3 pb-1">
            <h1>South Jakarta</h1>
          </div>
        </div>
      </div>

      <div className="flex border-b-4 pb-1">
        <div className="w-1/2 flex flex-col ">
          <div className=" w-full mt-3">
            <h1>Education</h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className=" w-full mt-3">
            <h1>SDN 7 Merak Batin</h1>
          </div>
          <div className=" w-full">
            <h1>SMPN 1 Natar</h1>
          </div>
          <div className=" w-full">
            <h1>SMAN 1 Natar</h1>
          </div>
          <div className=" w-full">
            <h1>Lampung University</h1>
          </div>
        </div>
      </div>
      <div className="flex border-b-4 pb-1">
        <div className="w-1/2 flex flex-col ">
          <div className=" w-full mt-3">
            <h1>Stack</h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className=" w-full mt-3">
            <h1>React.js</h1>
          </div>
          <div className=" w-full">
            <h1>Next.js</h1>
          </div>
          <div className=" w-full">
            <h1>Vue.js</h1>
          </div>
          <div className=" w-full">
            <h1>React Native</h1>
          </div>
          <div className=" w-full">
            <h1>Tailwind</h1>
          </div>
          <div className=" w-full">
            <h1>Material UI</h1>
          </div>
          <div className=" w-full">
            <h1>Node.js</h1>
          </div>
          <div className=" w-full">
            <h1>Express.js</h1>
          </div>
          <div className=" w-full">
            <h1>MySql</h1>
          </div>
          <div className=" w-full">
            <h1>Postgressql</h1>
          </div>
          <div className=" w-full">
            <h1>Sequelize</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biography;
