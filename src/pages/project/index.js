import React from 'react'
import Header from '../../component/atom/header'
import Footer from '../../component/atom/footer.js'
import CardProject from '../../component/molecule/cardProject'

function Project() {
  return (
    <div className='max-w-[1440px] mx-auto bg-gray-100'>
        <Header/>
        <main className='w-full px-10 mt-10'>
            <CardProject/>
        </main>
        <Footer/>
    </div>
  )
}

export default Project