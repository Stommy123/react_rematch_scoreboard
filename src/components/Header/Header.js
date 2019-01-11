import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players }) => 
		<div className="header">
			<Stats players={players} />
			<h1>Scoreboard</h1>
			<Stopwatch />
		</div>

export default Header;