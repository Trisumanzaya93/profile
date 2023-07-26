import React from 'react'
import Header from '../../component/atom/header'
import Footer from '../../component/atom/footer.js'
import CardProject from '../../component/molecule/cardProject'

function Project() {
  const projects = [{
    title:'Vehicle Rental',
    desc:"Vehicle rental is a platform where vehicle owners can rent the vehicle and the user can rent vehicle at the nearest location, Front-end using framework react.js for websites and react-native for mobile apps while Back-end uses express.js",
    imageProject:[
      'homevr.png',
      'detailvr.png',
      'historyvr.png',
      'loginvr.png',
      'paymentvr.png'
    ],
  },{
    title:'Digi Expert',
    desc:'DigiExpert is a digital collaboration platform for Experts from Telkom Group, state-owned enterprises, and Professionals aimed at enhancing business performance in responding to digital industry challenges and supporting national digitalization.',
    imageProject: [
      'digiexpert1.png',
      'digiexpert2.png',
      'digiexpert3.png',
      'digiexpert4.png',
      'digiexpert5.png',
      'digiexpert6.png',
    ]
  }]
  return (
    <div className='max-w-[1440px] mx-auto bg-gray-100'>
        <Header/>
        <main className='w-full px-10 mt-10 rounded-lg'>
          {projects.map((item,idx)=>{
            return(
              <CardProject project={item} key={idx}/>
            )
          })}
        </main>
        <Footer/>
    </div>
  )
}

export default Project