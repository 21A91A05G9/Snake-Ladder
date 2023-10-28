import React from 'react'
import Main from './main'
import './App.css'
import Player2 from './player2'
import Player3 from './player3'
import Player4 from './player4'
import Player5 from './player5'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/player2' element={<Player2/>}/>
          <Route path='/player3' element={<Player3/>}/>
          <Route path='/player4' element={<Player4/>}/>
          <Route path='/player5' element={<Player5/>}/>
        </Routes>
      </BrowserRouter>
       
    </>
   

  )
}
