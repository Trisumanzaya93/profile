import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Admin from './pages/admin/admin';
import Project from './pages/project';
import About from './pages/about';
import MyLearn from './pages/mylearn';
import Game from './pages/game';

function App() {

  
  
  return (
    <Router>  
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/mylearn" element={<MyLearn/>} />
        <Route path="/game" element={<Game/>} />
     </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <div className='w-40 h-40 bg-orange-400 animate-spin-slow rounded-xl flex justify-center items-center mt-36'>
    //       <div className='w-36 h-36 rounded-full bg-slate-300 flex justify-center items-center'>
    //         <div className='w-20 h-20 animate-spin rounded-xl bg-pink-400'></div>
    //       </div>
    //     </div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
