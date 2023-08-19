import React from 'react'
import Footer from '../../component/atom/footer'
import Header from '../../component/atom/header'

function MyLearn() {
  return (
    <div className='max-w-[1440px] h-screen mx-auto bg-gray-100'>
        <Header/>
        <main className='w-full px-10 mt-48 mb-64 flex font-primary font-bold justify-center rounded-lg'>
            <div className='border-4 shadow-lg border-[#232946] py-5 px-10 mt-28  rounded-xl -rotate-12'>
                <h1 className='text-7xl'>COMING</h1>
            </div>
            <div className='border-4 border-gray-100 shadow-lg bg-[#232946] py-5 px-16 mt-28 -ml-10 text-gray-100 rounded-xl rotate-[15deg]'>
                <h1 className='text-7xl'>SOON</h1>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default MyLearn