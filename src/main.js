import React from 'react'
import LogoImg from './images/snake-and-ladders.png'
import Logo from './images/logo.png'
import {Link} from 'react-router-dom'
export default function Main() {
  const p2 = () =>{

  }
  const p3 = () =>{

  }
  const p4 = () =>{

  }
  const p5 = () =>{

  }
  return (
    <div class="main container-fluid">
        <div class="image row">
          <div className='col-md-3 col-sm-4 col-xs-4 col-lg-3  col-offset-sm-3'></div>
          <img className='col-md-6 col-sm-4 col-xs-4 col-lg-6 ' src={LogoImg} alt='LogoImage'/>
        </div>
        <div class="logo row">
          <div className='col-md-2 col-sm-3 col-xs-3 col-lg-2  col-offset-md-2'></div>
          <img className='col-md-8 col-sm-6 col-xs-6 col-lg-8 ' src={Logo} alt='Logo'/>
        </div>
        <div class="text row">
            <div className='row '>
              <div className='col-md-3 col-sm-3 col-xs-3 col-lg-3 col-offset-md-3'></div>
              <h1 className='col-md-6 col-sm-6 col-xs-6 col-lg-6 center m-2 p-2'> Choose Number of Players</h1>  
            </div> 
            <div className='row'>
              <div className='col-md-3 col-sm-4 col-xs-4 col-lg-3 col-offset-md-3'></div>
              <div class="col-md-6 col-sm-4 col-xs-4 col-lg-6  m-2">
                <Link to='/player2'> <button class="button" onclick={p2()}>2</button> </Link>
                <Link to='/player3'> <button class="button" onclick={p3()}>3</button> </Link>
                <Link to='/player4'> <button class="button" onclick={p4()}>4</button> </Link>
                <Link to='/player5'> <button class="button" onclick={p5()}>5</button> </Link>
              </div>
            </div> 
           
        </div>

    </div>
  )
}
