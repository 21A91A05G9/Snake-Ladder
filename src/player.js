import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from './images/logo.png';
import d1 from './images/d1.png';
import d2 from './images/d2.png';
import d3 from './images/d3.png';
import d4 from './images/d4.png';
import d5 from './images/d5.png';
import d6 from './images/d6.png';
import Model from './leaderBoardModel';
import blue from './images/blue.png';
import red from './images/red.png';
import green from './images/green.png';
import yellow from './images/yellow.png';
import skyblue from './images/skyblue.png';
export default function Player() {
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

    const snakeladder = (sum, c) => {
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
    };
    
    
    

    const { count } = useParams();
    const location = useLocation();
    const players = location.state?.players || [];
    const msg = useState("Are You Ready ...!");
    const button = useState("Start");
    const n = parseInt(count, 10); // Number of players
    const navigate = useNavigate();
    const [Dice, setDice] = useState(d1);
    const [turnColor, setTurnColor] = useState("blue");
    const [playerTurn, setPlayerTurn] = useState(0); // Start with player 0
    const [positions, setPositions] = useState(new Array(n).fill(0)); // Player positions
    const [activePlayers, setActivePlayers] = useState([...Array(n).keys()]); // Active players
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [winners, setWinners] = useState([]);
    const [index,setIndex] = useState(0)

    const colorImages = {
        blue: blue,
        red: red,
        green: green,
        yellow: yellow,
        skyblue: skyblue
    };
    
    const colorNames = ["blue", "red", "green", "yellow", "skyblue"];
    const colors = colorNames.slice(0, n);

   
    useEffect(()=>{
        if (activePlayers.length === 1) {
            const winnerIndex = activePlayers[0]; // Index of the last active player
            const winnerUsername = players[winnerIndex]; // Get the winner's username
    
            setWinners([...winners, winnerIndex]);
            
            try {
                // Send a POST request to update the winner's score
                
                const response = axios.post('http://localhost/snake&ladder/score.php', {
                    username: winnerUsername,
                    score:  index+1// Set the score to 0 or update it accordingly
                });
                
                setIsModalOpen(true);
            } catch (error) {
                console.error('Failed to update winner score:', error);
            }

           

        }
    },[activePlayers])
    const rollDice = async () => {
        var result = Math.floor(Math.random() * 6) + 1;
        
        const diceImages = [d1, d2, d3, d4, d5, d6];
        setDice(diceImages[result - 1]);
    
        if (activePlayers.length === 1) return;
    
        const currentPlayerIndex = playerTurn % activePlayers.length;
        const currentPlayer = activePlayers[currentPlayerIndex];
        let newPositions = [...positions];
    
        if (newPositions[currentPlayer] + result <= 100) {
            const currentPlayerPosition = newPositions[currentPlayer];
    
            if (currentPlayerPosition > 0) {
                const grid_id = `g${currentPlayerPosition}`;
                const element = document.getElementById(grid_id);
                // Remove the current player's coin from the position
                const currentCoin = element.querySelector(`[data-player='${currentPlayer}']`);
                if (currentCoin) {
                    element.removeChild(currentCoin);
                }
            }
    
           
            let finalPosition = snakeladder(newPositions[currentPlayer] + result, colors[currentPlayer]);
            newPositions[currentPlayer] = finalPosition;
    
            const grid_id = `g${finalPosition}`;
            const element = document.getElementById(grid_id);
            const coinImage = document.createElement('img');
            coinImage.src = colorImages[colors[currentPlayer]];
            coinImage.height = 20;
            coinImage.width = 20;
            coinImage.setAttribute('data-player', currentPlayer);
    
            // Append the coin image instead of replacing the innerHTML
            element.appendChild(coinImage);
    
            if (finalPosition === 100) {
                const winnerUsername = players[currentPlayer]; // Get the winner's username
              
    
                setTimeout(() => alert(`${players[currentPlayer]} won the game!`), 1);
                setWinners([...winners, currentPlayer]);
                setActivePlayers(activePlayers.filter(player => player !== currentPlayer));
                setTurnColor(colors[activePlayers[(playerTurn + 1) % activePlayers.length]]);
    
                if (currentPlayerIndex === activePlayers.length - 1) {
                    setPlayerTurn(0);
                }

                try {
                    // Send a POST request to update the winner's score
                    
                    const response = await axios.post('http://localhost/snake&ladder/score.php', {
                        username: winnerUsername,
                        score: index  // Set the score to 0 or update it accordingly
                    });
                  
                } catch (error) {
                    console.error('Failed to update winner score:', error);
                }

                setIndex(index+1);
                
            } else {
                setPositions(newPositions);
                setPlayerTurn(playerTurn + 1);
            }
        } else {
            setPlayerTurn(playerTurn + 1);
        }
    
        setTurnColor(colors[activePlayers[(playerTurn + 1) % activePlayers.length]]);
    };
    
    

    const home = () => {
        navigate('/main');
    };

    const restart = () => {
        window.location.reload();
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='container-fluid board'>
            <Model isOpen={isModalOpen} closeModal={closeModal} winners={winners} players={players} msg={msg} button={button} />
            <div className="row r center">
                <div className='col-md-7 col-sm-12 col-xl-6 col-lg-7 col-xs-12'>
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

                <div className='col-md-5 col-sm-12 col-xl-5 col-lg-5 col-xs-12'>
                    <div className='row r m-2'>
                        <img className='logo' src={Logo} alt="logo" />
                    </div>
                    
                    <div className="msg">
                        <h1 id="msg"></h1>
                    </div>
                    <div className="tog">
                        <h2 id="tog"> Now it's <span id="col" style={{ color: turnColor }}>{colors[activePlayers[playerTurn % activePlayers.length]]}'s</span> Turn</h2>
                    </div>
                    <div className='row r diceboard center'>
                        <div className='col'>&nbsp;</div>
                        <div className="dice col">
                            <img className='row r m-2' id="dice-image" src={Dice} alt="dice" />
                            <button className='row r m-2' id="dice" onClick={rollDice}> Roll</button>
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
    );
}
