import React from 'react';
import Footer from '../../component/atom/footer';
import Header from '../../component/atom/header';
import Snake from '../../component/molecule/snake';

const Game = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-gray-100'>
        <Header/>
        <main className='w-full px-10 my-20 rounded-lg'>
        <Snake 
        color1="#248ec2"
        color2="#1d355e"
        backgroundColor="rgb(243 244 246)"
        />
        </main>
        <Footer/>
    </div>
  );
}

export default Game;