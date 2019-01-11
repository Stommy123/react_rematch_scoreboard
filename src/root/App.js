import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import PlayerList from '../components/Players/PlayerList';
import AddPlayerForm from '../components/Form/AddPlayerForm';
import PlayerDetail from '../components/Players/PlayerDetail';

class App extends Component {
	getHighScore = _ => {
		const { players } = this.props;
		const scores = players.map(p => p.score);
		const highScore = Math.max(...scores);
		if (highScore) return highScore;
	}
	render() {
		const { players, addPlayer, removePlayer, updatePlayerScore, selectPlayer, selectedPlayerIndex } = this.props;
		const selectedPlayer = selectedPlayerIndex !== -1 && players[selectedPlayerIndex];
		const highScore = this.getHighScore();
		return (
			<div className="scoreboard">
				<Header players={players} />
				<div className="players">
					<PlayerList
						players={players}
						removePlayer={removePlayer}
						updatePlayerScore={updatePlayerScore}
						selectPlayer={selectPlayer}
						highScore={highScore}
					/>
				</div>
				<AddPlayerForm addPlayer={addPlayer} />
				<div className="player-detail">
					<PlayerDetail selectedPlayer={selectedPlayer} />
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => ({ 
	state: state,
	players: state.default.players,
	selectedPlayerIndex: state.default.selectedPlayerIndex, 
});
const mapDispatchToProps = players => ({
	addPlayer: players.default.addPlayer,
	removePlayer: players.default.removePlayer,
	updatePlayerScore: players.default.updatePlayerScore,
	selectPlayer: players.default.selectPlayer,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
