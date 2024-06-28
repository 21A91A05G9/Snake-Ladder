import React from 'react'
import Main from './main'
import './App.css'
import Player from './player'
import Login from './login'
import Register from './register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/player/:count' element={<Player/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
       
    </>
   

  )
}
