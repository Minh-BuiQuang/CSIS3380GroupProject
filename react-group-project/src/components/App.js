import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Header from './Header'
import About from './About'
import MyCart from './MyCart'
import Home from './Home'
import NotFound from './NotFound'
function App() {
  return (
    <div className="App container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About title="About"/>}/>
        <Route path="/mycart" element={<MyCart title="My Cart"/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
