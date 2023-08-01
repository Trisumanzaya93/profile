import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/atom/header";
import Footer from "../../component/atom/footer.js";
import tri from "../../assets/img/tri.png";
import CardProject from "../../component/molecule/cardProject";
import Stack from "../../component/molecule/stack";
// import Typewriter from "typewriter-effect";
import Typewriter from 'typewriter-effect/dist/core';

function Home() {
  const navigate = useNavigate();
  const project = {
    title: "Vehicle Rental",
    desc: "Vehicle rental is a platform where vehicle owners can rent the vehicle and the user can rent vehicle at the nearest location, Front-end using framework react.js for websites and react-native for mobile apps while Back-end uses express.js",
    imageProject: [
      "homevr.png",
      "detailvr.png",
      "historyvr.png",
      "loginvr.png",
      "paymentvr.png",
    ],
  };

  const writer = () => {
    const title = new Typewriter("#title", {
      cursor:' '
    });
     title
    .typeString('sumanzaya')
    .pauseFor(2500)
    .start();
    const job = new Typewriter('#job',{
      cursor:' ',
      string:' '
    })
    setTimeout(() => {
    job
    .typeString('a Software Developer')
    .pauseFor(2500)
    .start(2500);
    }, 3000);
    
  }

  useEffect( () => {
    writer()
  }, []);

  return (
    <div className="mx-auto  max-w-[1440px] h-full bg-gray-100 scrollbar-hide">
      <Header />
      <div className=" w-full h-[85%]">
        <div className="w-full flex justify-center">
          <div className="w-96 h-96 bg-profile flex justify-center">
            <img
              className="rounded-full w-56 h-64 border-b-4 border-gray-100"
              src={tri}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center font-primary font-extrabold mt-[-70px]">
          <h1 className="text-6xl animate-wiggle">Hi. </h1>
          <div className="flex pt-6">
            <h1 className="text-6xl ">I am</h1>
            <div className="bg-[#232946] ml-2 px-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1  hover:-rotate-12 duration-300">
              <h1 className="text-6xl text-gray-100" id="title">
                Sumanzaya
              </h1>
              {/* <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<h1 className="text-6xl text-gray-100">Sumanzaya</h1>')
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .start();
                }}
              /> */}
            </div>
          </div>
          <div className="bg-[#232946] ml-2 px-4 mt-6 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300">
            <h1 className="text-6xl text-gray-100" id='job'>   </h1>
          </div>
        </div>
      </div>
      <div className="w-full px-10 font-primary font-extrabold mt-20">
        <div className="w-full justify-between mb-10">
          <h1 className="text-4xl">Tech Stack</h1>
        </div>
        <Stack />
      </div>
      <div className="w-full px-10 font-primary font-extrabold mt-20">
        <div className="w-full flex justify-between mb-10">
          <h1 className="text-4xl">Projects</h1>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold  px-4 border border-gray-400 rounded-2xl shadow"
            onClick={() => navigate("/project")}
          >
            see all
          </button>
        </div>
        <CardProject project={project} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
