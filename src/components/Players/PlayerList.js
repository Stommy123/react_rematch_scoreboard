import React from 'react';
import Player from './Player';

const PlayerList = ({ players, removePlayer, updatePlayerScore, selectPlayer, highScore }) => 
    players.map(player => 
        <div className="players">
            <Player
                key={player.name}
                player={player}
                removePlayer={removePlayer}
                updatePlayerScore={updatePlayerScore}
                selectPlayer={selectPlayer}
                isHighScore={highScore === player.score}
            />
        </div>
    )


export default PlayerList;