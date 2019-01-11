import React, { Component } from 'react';

class Stopwatch extends Component {
	state = {
		isRunning: false,
		previouseTime: 0,
		elapsedTime: 0,    
	};
	
	componentDidMount() { this.interval = setInterval(this.onTick) };

	componentWillUnmount() { clearInterval(this.interval) };
	
	handleStopWach = _ => {
		this.setState(prevState => ({ isRunning: !prevState.isRunning }));
		if (!this.state.isRunning) this.setState({ previousTime: Date.now() });
	};

	onReset = _ => {
		this.setState({
			elapsedTime: 0,
			previousTime: Date.now(),
		});
	};

	onTick = _ => {
		const { isRunning } = this.state;
		if (isRunning) {
			const now = Date.now();
			this.setState({
				elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
				previousTime: Date.now(),
			});
		}
	};
	
	render() {
		const { isRunning, elapsedTime } = this.state;
		const seconds = Math.floor(elapsedTime / 1000);
		return (
			<div className="stopwatch" >
				<h2>Stopwatch</h2>
				<div className="stopwatch-time"> {seconds} </div>
				<button onClick={this.handleStopWach}>{ isRunning ? 'Stop' : 'Start' }</button>
				<button onClick={this.onReset}>Reset</button>
			</div>
		)
	} 
};

export default Stopwatch;