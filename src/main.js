import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from './images/snake-and-ladders.png';
import Logo from './images/logo.png';
import PlayerModal from './playerModel';

export default function Main() {
  const [players, setPlayers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [numPlayers, setNumPlayers] = useState(0);
  const navigate = useNavigate();

  const handlePlayerSelection = (numPlayers) => {
    setNumPlayers(numPlayers);
    setPlayers([]);
    setCurrentPlayer(1);
    setShowModal(true);
  };

  const handleSave = (playerName) => {
    const newPlayerName = playerName || `Player ${currentPlayer}`;
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers, newPlayerName];
      
      if (currentPlayer < numPlayers) {
        setCurrentPlayer(currentPlayer + 1);
      } else {
        setShowModal(false);
        navigate(`/player/${numPlayers}`, { state: { players: updatedPlayers } });
      }
  
      return updatedPlayers;
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="main container-fluid">
      <div className="image row">
        <div className="col-md-3 col-sm-4 col-xs-4 col-lg-3 col-offset-sm-3"></div>
        <img className="col-md-6 col-sm-4 col-xs-4 col-lg-6" src={LogoImg} alt="LogoImage" />
      </div>
      <div className="logo row">
        <div className="col-md-2 col-sm-3 col-xs-3 col-lg-2 col-offset-md-2"></div>
        <img className="col-md-8 col-sm-6 col-xs-6 col-lg-8" src={Logo} alt="Logo" />
      </div>
      <div className="text row">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3 col-offset-md-3"></div>
          <h1 className="col-md-6 col-sm-6 col-xs-6 col-lg-6 center m-2 p-2">
            Choose Number of Players
          </h1>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-4 col-lg-3 col-offset-md-3"></div>
          <div className="col-md-6 col-sm-4 col-xs-4 col-lg-6 center m-2">
            <button className="button mx-1" onClick={() => handlePlayerSelection(2)}>2</button>
            <button className="button mx-1" onClick={() => handlePlayerSelection(3)}>3</button>
            <button className="button mx-1" onClick={() => handlePlayerSelection(4)}>4</button>
            <button className="button mx-1" onClick={() => handlePlayerSelection(5)}>5</button>
          </div>
        </div>
      </div>
      <PlayerModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
        playerNumber={currentPlayer}
      />
    </div>
  );
}
