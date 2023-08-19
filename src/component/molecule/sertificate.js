import React from "react";

function Sertificate() {
  return (
    <div className="w-full">
      <div>
      <div className="w-max px-5 mb-5 py-2 rounded-br-xl rounded-tr-xl border-2 shadow-lg bg-[#232946]">
        <h1 className=" text-3xl text-white">Fazztrack</h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-96 h-64 shadow-lg">
            <img
              src={require("../../assets/img/fazztrack.png")}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-max px-5 mb-5 py-2 rounded-br-xl rounded-tr-xl border-2 shadow-lg bg-[#232946]">
        <h1 className=" text-3xl text-white">Dicoding</h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-96 h-64 shadow-lg">
            <img
              src={require("../../assets/img/dicoding1.png")}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div><div className="w-96 h-64 shadow-lg mt-5">
            <img
              src={require("../../assets/img/dicoding2.png")}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div><div className="w-96 h-64 shadow-lg mt-5">
            <img
              src={require("../../assets/img/dicoding3.png")}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sertificate;
