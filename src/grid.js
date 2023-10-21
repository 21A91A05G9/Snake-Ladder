import React from 'react'
import Logo from './images/logo.png'
import Dice from './images/d1.png'
export default function grid() {
    const rollDice2 = () =>{
        
    }
    const home = () =>{
        
    }
    const restart = () =>{
        
    }
  return (
    
    <div className='container-fluid board '>
           
            
            <div className="row center"> 
                <div className='col-md-1 col-lg-1 col-xs-12 col-sm-12 col-xl-1 col-offset-md-1'></div>
                <div className='col-md-6 col-sm-12 col-xl-6 col-lg-6 col-xs-12 '> 
                    <div class="gridboard">
                        <div class="grid" id="g100"></div>
                        <div class="grid" id="g99"></div>
                        <div class="grid" id="g98"></div>
                        <div class="grid" id="g97"></div>
                        <div class="grid" id="g96"></div>
                        <div class="grid" id="g95"></div>
                        <div class="grid" id="g94"></div>
                        <div class="grid" id="g93"></div>
                        <div class="grid" id="g92"></div>
                        <div class="grid" id="g91"></div>
                        <div class="grid" id="g81"></div>
                        <div class="grid" id="g82"></div>
                        <div class="grid" id="g83"></div>
                        <div class="grid" id="g84"></div>
                        <div class="grid" id="g85"></div>
                        <div class="grid" id="g86"></div>
                        <div class="grid" id="g87"></div>
                        <div class="grid" id="g88"></div>
                        <div class="grid" id="g89"></div>
                        <div class="grid" id="g90"></div>
                        <div class="grid" id="g80"></div>
                        <div class="grid" id="g79"></div>
                        <div class="grid" id="g78"></div>
                        <div class="grid" id="g77"></div>
                        <div class="grid" id="g76"></div>
                        <div class="grid" id="g75"></div>
                        <div class="grid" id="g74"></div>
                        <div class="grid" id="g73"></div>
                        <div class="grid" id="g72"></div>
                        <div class="grid" id="g71"></div>
                        <div class="grid" id="g61"></div>
                        <div class="grid" id="g62"></div>
                        <div class="grid" id="g63"></div>
                        <div class="grid" id="g64"></div>
                        <div class="grid" id="g65"></div>
                        <div class="grid" id="g66"></div>
                        <div class="grid" id="g67"></div>
                        <div class="grid" id="g68"></div>
                        <div class="grid" id="g69"></div>
                        <div class="grid" id="g70"></div>
                        <div class="grid" id="g60"></div>
                        <div class="grid" id="g59"></div>
                        <div class="grid" id="g58"></div>
                        <div class="grid" id="g57"></div>
                        <div class="grid" id="g56"></div>
                        <div class="grid" id="g55"></div>
                        <div class="grid" id="g54"></div>
                        <div class="grid" id="g53"></div>
                        <div class="grid" id="g52"></div>
                        <div class="grid" id="g51"></div>
                        <div class="grid" id="g41"></div>
                        <div class="grid" id="g42"></div>
                        <div class="grid" id="g43"></div>
                        <div class="grid" id="g44"></div>
                        <div class="grid" id="g45"></div>
                        <div class="grid" id="g46"></div>
                        <div class="grid" id="g47"></div>
                        <div class="grid" id="g48"></div>
                        <div class="grid" id="g49"></div>
                        <div class="grid" id="g50"></div>
                        <div class="grid" id="g40"></div>
                        <div class="grid" id="g39"></div>
                        <div class="grid" id="g38"></div>
                        <div class="grid" id="g37"></div>
                        <div class="grid" id="g36"></div>
                        <div class="grid" id="g35"></div>
                        <div class="grid" id="g34"></div>
                        <div class="grid" id="g33"></div>
                        <div class="grid" id="g32"></div>
                        <div class="grid" id="g31"></div>
                        <div class="grid" id="g21"></div>
                        <div class="grid" id="g22"></div>
                        <div class="grid" id="g23"></div>
                        <div class="grid" id="g24"></div>
                        <div class="grid" id="g25"></div>
                        <div class="grid" id="g26"></div>
                        <div class="grid" id="g27"></div>
                        <div class="grid" id="g28"></div>
                        <div class="grid" id="g29"></div>
                        <div class="grid" id="g30"></div>
                        <div class="grid" id="g20"></div>
                        <div class="grid" id="g19"></div>
                        <div class="grid" id="g18"></div>
                        <div class="grid" id="g17"></div>
                        <div class="grid" id="g16"></div>
                        <div class="grid" id="g15"></div>
                        <div class="grid" id="g14"></div>
                        <div class="grid" id="g13"></div>
                        <div class="grid" id="g12"></div>
                        <div class="grid" id="g11"></div>
                        <div class="grid" id="g1"></div>
                        <div class="grid" id="g2"></div>
                        <div class="grid" id="g3"></div>
                        <div class="grid" id="g4"></div>
                        <div class="grid" id="g5"></div>
                        <div class="grid" id="g6"></div>
                        <div class="grid" id="g7"></div>
                        <div class="grid" id="g8"></div>
                        <div class="grid" id="g9"></div>
                        <div class="grid" id="g10"></div>
                    </div>
                </div>

                <div className='col-md-5 col-sm-12 col-xl-5 col-lg-5 col-xs-12' >
                    <div className='row m-2'>
                        
                        <img className='col' src={Logo}/>
                    </div>
                    <div className='row diceboard center'>
                        <div className='col'>&nbsp;</div>
                        <div class="dice col">
                            <img className='row m-2' id="dice-image" src={Dice} alt="dice image"/>
                            <button className='row m-2' id="dice"  onclick={rollDice2()}> Roll</button>
                        </div>

                        <div class="icon col">
                            <div class="row m-2"><button onclick={home()}> HOME</button></div>
                            <div class="row m-2"><button onclick={restart()}> RESTART</button></div>
                        </div>
                        <div className='col'>&nbsp;</div>
                        </div>
                    </div>
                </div> 
    </div>
  )
}
