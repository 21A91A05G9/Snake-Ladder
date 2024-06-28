import React, { useState, useEffect } from 'react';

function PlayerModal({ show, handleClose, handleSave, playerNumber }) {
  const [playerName, setPlayerName] = useState('');
  const [isValid, setIsValid] = useState(null); // null: not checked, true: valid, false: invalid
  const [color, setColor] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (playerName) {
      const validateUser = async () => {
        try {
          const response = await fetch(`http://localhost/snake&ladder/player.php?username=${playerName}`);
          const data = await response.json();

          setIsValid(data.valid);
          if (data.valid) {
            setMsg("Valid Username");
            setColor("green");
          } else {
            setMsg("Invalid Username");
            setColor("red");
          }
        } catch (error) {
          console.error('Error validating user:', error);
          setIsValid(false);
          setMsg("Error validating user");
          setColor("red");
        }
      };

      validateUser();
    } else {
      setIsValid(null);
      setMsg('');
      setColor(null);
    }
  }, [playerName]);

  if (!show) {
    return null;
  }

  const onSave = () => {
    if (isValid) {
      handleSave(playerName);
      setPlayerName('');
      setMsg("");
      setColor(null);
    } else {
      alert('Invalid user');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center" style={{color:'black'}}>Enter Name for Player {playerNumber}</h5>
          <button  className="button btn" style={{backgroundColor:'black'}} onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            className="form-control"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter player name"
          />
         
          <p className='m-2 mb-4 winner text-center' style={{color: color, height: 10}}>{msg}</p> 

          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            Close
          </button> &nbsp; &nbsp;
          <button type="button" className="btn btn-secondary" onClick={onSave} disabled={isValid === false}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerModal;
