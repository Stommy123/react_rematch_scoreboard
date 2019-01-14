import React from 'react';
import Header from '../Header/Header';
import PlayerList from '../Players/PlayerList';
import AddPlayerForm from '../Form/AddPlayerForm';
import PlayerDetail from '../Players/PlayerDetail'

const Scoreboard = ({ 
    players, 
    addPlayer,
    removePlayer, 
    updatePlayerScore, 
    selectPlayer, 
    selectedPlayer,
    highScore,
 }) => [
            <Header key="head" players={players} />,
            <PlayerList
                key="player-list"
                players={players}
                removePlayer={removePlayer}
                updatePlayerScore={updatePlayerScore}
                selectPlayer={selectPlayer}
                highScore={highScore}
            />,
            <AddPlayerForm key="player-form" addPlayer={addPlayer} />,
            <PlayerDetail  key="player-detail" selectedPlayer={selectedPlayer} />
 ]

export default Scoreboard;