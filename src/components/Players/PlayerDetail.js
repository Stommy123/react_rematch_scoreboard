import React from 'react';

const PlayerDetail = ({ selectedPlayer }) => {
    if (selectedPlayer) return (
        <div className="player-detail">
            <h3>{selectedPlayer.name}</h3>
            <ul>
                <li>
                    <span>Score: </span> 
                    {selectedPlayer.score}
                </li>
                <li>
                    <span>Created: </span> 
                    {selectedPlayer.created}
                </li>
                <li>
                    <span>Updated: </span> 
                    {selectedPlayer.updated}
                </li>        
            </ul>
        </div>
    )
    return  (
        <div className="player-detail">
            <p>Click on a player to see more details</p>
        </div>
    )
}

export default PlayerDetail;