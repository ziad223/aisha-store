import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import AllCakesPage from './AllCake'
import FloatingContact from './FloatingContact'

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <FloatingContact/>
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/all-cake' element = {<AllCakesPage/>} />
   </Routes> 
   </BrowserRouter>
  )
}

export default App
