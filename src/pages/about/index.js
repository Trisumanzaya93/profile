import React, { useState } from "react";
import Footer from "../../component/atom/footer";
import Header from "../../component/atom/header";
import Biography from "../../component/molecule/biography";
import Detail from "../../component/molecule/detail";
import Sertificate from "../../component/molecule/sertificate";

function About() {

    const [hasActive, setHasActive]= useState({
        about:true,
        biography:false,
        sertificate:false
    })

    const hasRenderContent = () => {
        if(hasActive.about) return <Detail/>
        if(hasActive.biography) return <Biography/>
        return <Sertificate/>
    }

  return (
    <div className="max-w-[1440px] mx-auto bg-gray-100 font-primary font-extrabold">
      <Header />
      <main className="w-full h-full px-10 mt-10 mb-10 ">
        <div className="flex">
          <button className= {`${hasActive.about?'bg-white text-gray-800':"bg-[#232946] text-white"} font-semibold  px-4  rounded-tl-lg py-2`}
          onClick={()=>setHasActive({
            about:true,
            biography:false,
            sertificate:false
          })}
          >
          About
          </button>
          <button className= {`${hasActive.biography?'bg-white text-gray-800':"bg-[#232946] text-white"} font-semibold  px-4  py-2`}
          onClick={()=>setHasActive({
            about:false,
            biography:true,
            sertificate:false
          })}
          >
          Biography
          </button>
          <button className= {`${hasActive.sertificate?'bg-white text-gray-800':"bg-[#232946] text-white"} font-semibold  px-4  rounded-tr-lg py-2`}
          onClick={()=>setHasActive({
            about:false,
            biography:false,
            sertificate:true
          })}
          >
          Sertificate
          </button>
        </div>
        <div className="w-full  bg-white rounded-b-lg rounded-tr-lg  px-5 py-10 shadow-lg ">
            {hasRenderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
