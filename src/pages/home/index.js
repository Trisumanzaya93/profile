import React from "react";
import Header from "../../component/atom/header";
import Footer from "../../component/atom/footer.js";
import tri from "../../assets/img/tri.png";

function Home() {
  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh]">
      <div className="2xl:mx-auto  max-w-[1440px] h-full bg-gray-100 scrollbar-hide">
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
                <h1 className="text-6xl text-gray-100">Sumanzaya</h1>
              </div>
            </div>
            <div className="bg-[#232946] ml-2 px-4 mt-6 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300">
              <h1 className="text-6xl text-gray-100">a Software Developer</h1>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default Home;
