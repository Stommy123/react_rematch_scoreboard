import React, { Component } from 'react';

class AddPlayerForm extends Component {
  	state = { name: '' };

  	onNameChange = e => {
		const name = e.target.value;
		this.setState({ name });
  	};

	addPlayer = e => {
		const { name } = this.state;
		const { addPlayer } = this.props;
		e.preventDefault();
		addPlayer(name);
		this.setState({ name: '' });
	};

	render() {
		return (
			<div className="add-player-form">
				<form onSubmit={this.addPlayer}>
					<input
						type="text"
						value={this.state.name}
						onChange={this.onNameChange}
						placeholder="Player Name"
					/>
					<input type="submit" value="Add Player" />
				</form>
			</div>
		);
	}
}

export default AddPlayerForm;
