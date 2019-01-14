import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard/Scoreboard';

class App extends Component {
	getHighScore = _ => {
		const { player: { players } } = this.props;
		const scores = players.map(p => p.score);
		const highScore = Math.max(...scores);
		if (highScore) return highScore;
	}
	render() {
		const { 
			player: { players, selectedPlayerIndex },
			dispatch: {
				player: {
					addPlayer,
					removePlayer,
					updatePlayerScore,
					selectPlayer
				},
			}

		} = this.props
		const selectedPlayer = selectedPlayerIndex !== -1 && players[selectedPlayerIndex];
		const highScore = this.getHighScore();
		return (
			<div className="scoreboard">
				<Scoreboard
					players={players}
					addPlayer={addPlayer}
					removePlayer={removePlayer}
					updatePlayerScore={updatePlayerScore}
					selectPlayer={selectPlayer}
					selectedPlayer={selectedPlayer}
					highScore={highScore}
				/>
			</div>
		);
	}
};

const mapStateToProps = ({ player }) => ({ player });
const mapDispatchToProps = ({ player }) => ({
	dispatch: { player: { ...player } }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
