import React from 'react';
import Logo from './images/logo.png';
import FetchData from './fetchData';
import { Link } from 'react-router-dom';

export default function Modal({ isOpen, closeModal, winners, players }) {
    if (!isOpen) return null;
    const color = ["Blue", "Red", "Green", "Yellow", "Skyblue"];
    const score = [5000, 2000, 1000, 500, 100];

    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                        <div className="logo row">
                            <div className='col-md-2 col-sm-3 col-xs-3 col-lg-2 col-offset-md-2'></div>
                            <img className='col-md-8 col-sm-6 col-xs-6 col-lg-8' src={Logo} alt='Logo' />
                        </div>
                    </h5>
                </div>
                <div className="modal-body">
                    <center>
                        <h4 className='leader'>Leader Board</h4>
                        <table cellPadding={5} border={2}>
                            <thead>
                                <tr className='leader'>
                                    <th>Player</th><th>Score</th><th>Global Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {winners.map((winner, index) => (
                                    <tr className='winner' key={index} style={{ color: color[winner] }}>
                                        <td>{players[winner]}</td><td>{score[index]} 🪙</td>
                                        <td><FetchData user={players[winner]} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </center>
                </div>
                <div className="modal-footer">
                    <Link to='/main'>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </Link>
                    &nbsp; &nbsp;
                    <button type="button" className="btn btn-secondary" onClick={handleRestart} data-dismiss="modal">Restart</button>
                </div>
            </div>
        </div>
    );
}
