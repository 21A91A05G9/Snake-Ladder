import React, { useState } from 'react';
import Logo from './images/logo.png'
import d1 from './images/d1.png'
import d2 from './images/d2.png'
import d3 from './images/d3.png'
import d4 from './images/d4.png'
import d5 from './images/d5.png'
import d6 from './images/d6.png'
import blue from './images/blue.png'
import red from './images/red.png'
import green from './images/green.png'
export default function Player3() {
  function snakeladder(sum, c) {
    // Define snake and ladder positions
    const snakePositions = {
      82: 20,
      95: 38,
      87: 66,
      56: 8,
      36: 5,
      49: 7
    };
    const ladderPositions = {
      5: 35,
      9: 51,
      23: 42,
      62: 83,
      48: 86,
      69: 91
    };

    if (snakePositions.hasOwnProperty(sum)) {
      sum = snakePositions[sum];
      var x = document.getElementById("msg");
      x.innerHTML = ("Oh no! You landed on a snake 🐍. Move back to position " + sum + ".");
      x.style.color = c;
    } else if (ladderPositions.hasOwnProperty(sum)) {
      sum = ladderPositions[sum];
      var y = document.getElementById("msg");
      y.innerHTML = ("Congratulations! You landed on a ladder 🪜. Climb up to position " + sum + ".");
      y.style.color = c;
    } else {
      var z = document.getElementById("msg");
      z.innerHTML = (" ");
    }

    return sum;
  }

  const [Dice, setDice] = useState(d1);
  const [playerTurn, setPlayerTurn] = useState("blue's");
  const [turnColor, setTurnColor] = useState('blue');
  const [tog, setTog] = useState(0);
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);

  const rollDice = () => {
    var result = Math.floor(Math.random() * 6) + 1;
    console.log(result);

    if (result === 1) setDice(d1);
    else if (result === 2) setDice(d2);
    else if (result === 3) setDice(d3);
    else if (result === 4) setDice(d4);
    else if (result === 5) setDice(d5);
    else setDice(d6);

    // Set playerTurn text and update positions for three players
    if (tog % 3 === 0) {
      setPlayerTurn("blue's");
      setTurnColor('blue');
      if (p1 + result <= 100) {
        // Update positions for Player 1
        if (p1 > 0) {
          let grid_id = `g${p1}`;
          let element = document.getElementById(grid_id);
          element.innerHTML = "";
        }

        let finalresult = snakeladder(p1 + result, 'blue');
        setP1(finalresult);
        let grid_id = `g${finalresult}`;
        let element = document.getElementById(grid_id);
        element.innerHTML = `<img src=${blue} height="30vw" width="30vw" />`;

        if (finalresult === 100) {
          setTimeout(() => alert("blue won the game"), 1000);
        }
      }
    } else if (tog % 3 === 1) {
      setPlayerTurn("red's");
      setTurnColor('red');
      if (p2 + result <= 100) {
        // Update positions for Player 2
        if (p2 > 0) {
          let grid_id = `g${p2}`;
          let element = document.getElementById(grid_id);
          element.innerHTML = "";
        }

        let finalresult = snakeladder(p2 + result, 'red');
        setP2(finalresult);
        let grid_id = `g${finalresult}`;
        let element = document.getElementById(grid_id);
        element.innerHTML = `<img src=${red} height="30vw" width="30vw" />`;

        if (finalresult === 100) {
          setTimeout(() => alert("red won the game"), 1000);
        }
      }
    } else {
      setPlayerTurn("green's");
      setTurnColor('green');
      if (p3 + result <= 100) {
        // Update positions for Player 3
        if (p3 > 0) {
          let grid_id = `g${p3}`;
          let element = document.getElementById(grid_id);
          element.innerHTML = "";
        }

        let finalresult = snakeladder(p3 + result, 'green');
        setP3(finalresult);
        let grid_id = `g${finalresult}`;
        let element = document.getElementById(grid_id);
        element.innerHTML = `<img src=${green} height="30vw" width="30vw" />`;

        if (finalresult === 100) {
          setTimeout(() => alert("green won the game"), 1000);
        }
      }
    }

    setTog(tog + 1);
  };

  const home = () => {
    // Implement home logic if needed
  };

  const restart = () => {
    // Implement restart logic if needed
  };
  return (
    <div className='container-fluid board '>
           
            
    <div className="row r center"> 
        <div className='col-md-7 col-sm-12 col-xl-6 col-lg-7 col-xs-12' > 
            <div className='row r'>
            <div className="gridboard " >
                <div className="grid" id="g100"></div>
                <div className="grid" id="g99"></div>
                <div className="grid" id="g98"></div>
                <div className="grid" id="g97"></div>
                <div className="grid" id="g96"></div>
                <div className="grid" id="g95"></div>
                <div className="grid" id="g94"></div>
                <div className="grid" id="g93"></div>
                <div className="grid" id="g92"></div>
                <div className="grid" id="g91"></div>
                <div className="grid" id="g81"></div>
                <div className="grid" id="g82"></div>
                <div className="grid" id="g83"></div>
                <div className="grid" id="g84"></div>
                <div className="grid" id="g85"></div>
                <div className="grid" id="g86"></div>
                <div className="grid" id="g87"></div>
                <div className="grid" id="g88"></div>
                <div className="grid" id="g89"></div>
                <div className="grid" id="g90"></div>
                <div className="grid" id="g80"></div>
                <div className="grid" id="g79"></div>
                <div className="grid" id="g78"></div>
                <div className="grid" id="g77"></div>
                <div className="grid" id="g76"></div>
                <div className="grid" id="g75"></div>
                <div className="grid" id="g74"></div>
                <div className="grid" id="g73"></div>
                <div className="grid" id="g72"></div>
                <div className="grid" id="g71"></div>
                <div className="grid" id="g61"></div>
                <div className="grid" id="g62"></div>
                <div className="grid" id="g63"></div>
                <div className="grid" id="g64"></div>
                <div className="grid" id="g65"></div>
                <div className="grid" id="g66"></div>
                <div className="grid" id="g67"></div>
                <div className="grid" id="g68"></div>
                <div className="grid" id="g69"></div>
                <div className="grid" id="g70"></div>
                <div className="grid" id="g60"></div>
                <div className="grid" id="g59"></div>
                <div className="grid" id="g58"></div>
                <div className="grid" id="g57"></div>
                <div className="grid" id="g56"></div>
                <div className="grid" id="g55"></div>
                <div className="grid" id="g54"></div>
                <div className="grid" id="g53"></div>
                <div className="grid" id="g52"></div>
                <div className="grid" id="g51"></div>
                <div className="grid" id="g41"></div>
                <div className="grid" id="g42"></div>
                <div className="grid" id="g43"></div>
                <div className="grid" id="g44"></div>
                <div className="grid" id="g45"></div>
                <div className="grid" id="g46"></div>
                <div className="grid" id="g47"></div>
                <div className="grid" id="g48"></div>
                <div className="grid" id="g49"></div>
                <div className="grid" id="g50"></div>
                <div className="grid" id="g40"></div>
                <div className="grid" id="g39"></div>
                <div className="grid" id="g38"></div>
                <div className="grid" id="g37"></div>
                <div className="grid" id="g36"></div>
                <div className="grid" id="g35"></div>
                <div className="grid" id="g34"></div>
                <div className="grid" id="g33"></div>
                <div className="grid" id="g32"></div>
                <div className="grid" id="g31"></div>
                <div className="grid" id="g21"></div>
                <div className="grid" id="g22"></div>
                <div className="grid" id="g23"></div>
                <div className="grid" id="g24"></div>
                <div className="grid" id="g25"></div>
                <div className="grid" id="g26"></div>
                <div className="grid" id="g27"></div>
                <div className="grid" id="g28"></div>
                <div className="grid" id="g29"></div>
                <div className="grid" id="g30"></div>
                <div className="grid" id="g20"></div>
                <div className="grid" id="g19"></div>
                <div className="grid" id="g18"></div>
                <div className="grid" id="g17"></div>
                <div className="grid" id="g16"></div>
                <div className="grid" id="g15"></div>
                <div className="grid" id="g14"></div>
                <div className="grid" id="g13"></div>
                <div className="grid" id="g12"></div>
                <div className="grid" id="g11"></div>
                <div className="grid" id="g1"></div>
                <div className="grid" id="g2"></div>
                <div className="grid" id="g3"></div>
                <div className="grid" id="g4"></div>
                <div className="grid" id="g5"></div>
                <div className="grid" id="g6"></div>
                <div className="grid" id="g7"></div>
                <div className="grid" id="g8"></div>
                <div className="grid" id="g9"></div>
                <div className="grid" id="g10"></div>
            </div>
            </div>
        </div>

        <div className='col-md-5 col-sm-12 col-xl-5 col-lg-5 col-xs-12' >
            <div className='row r m-2'>
                
                <img className='logo' src={Logo}/>
            </div>
            <div className="msg">
                <h1 id="msg"></h1>
            </div>
            <div className="tog">
                <h2 id="tog"> Now it's <span id="col" style={{color:turnColor}}> {playerTurn} </span> Turn</h2>
            </div>
            <div className='row r diceboard center'>
            <div className='col'>&nbsp;</div>
                <div className="dice col">
                    <img className='row r m-2' id="dice-image" src={Dice} alt="dice image"/>
                    <button className='row r m-2' id="dice"  onClick={rollDice}> Roll</button>
                </div>

                <div className="icon col">
                    <div className="row r m-2"><button onClick={home}> HOME</button></div>
                    <div className="row r m-2"><button onClick={restart}> RESTART</button></div>
                </div>
                <div className='col'>&nbsp;</div>
                </div>
            </div>
        </div> 
    </div>
  )
}

