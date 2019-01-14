import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stopwatch extends Component {

	componentDidMount() { 
		const { dispatch: { stopwatch: { onTick } } } = this.props
		this.interval = setInterval(onTick) 
	};

	componentWillUnmount() { 
		clearInterval(this.interval) 
	};
	
	render() {
		const { 
			stopwatch: {
				elapsedTime, 
				isRunning,
			},
			dispatch: {
				stopwatch: {
				handleStopWatch,
				onReset
				}
			}
		} = this.props
		const seconds = Math.floor(elapsedTime / 1000);
		return (
			<div className="stopwatch" >
				<h2>Stopwatch</h2>
				<div className="stopwatch-time"> {seconds} </div>
				<button onClick={handleStopWatch}>{ isRunning ? 'Stop' : 'Start' }</button>
				<button onClick={onReset}>Reset</button>
			</div>
		)
	} 
};

const mapStateToProps = ({ stopwatch }) => ({ stopwatch });
const mapDispatchToProps = ({ stopwatch }) => ({
	dispatch: {
		stopwatch: { ...stopwatch }
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);