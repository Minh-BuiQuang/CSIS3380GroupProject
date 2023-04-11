import React from 'react'
import {Routes, Route } from 'react-router-dom'

import Header from './Header'
import About from './About'
import MyCart from './MyCart'
import Home from './Home'
import NotFound from './NotFound'
import Category from './Category'

function App() {
  return (
    <div className="App container">
      <Header/>
      <Routes forceRefresh={true}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About title="About"/>}/>
        <Route path="/mycart" element={<MyCart title="My Cart"/>}/>
        <Route path="/new" element={<Category title="New Arrival"/>}/>
        <Route path="/unisex" element={<Category title="Unisex"/>}/>
        <Route path="/men" element={<Category title="Men"/>}/>
        <Route path="/women" element={<Category title="Women"/>}/>
        <Route path="/girls" element={<Category title="Girls"/>}/>
        <Route path="/boys" element={<Category title="Boys"/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
