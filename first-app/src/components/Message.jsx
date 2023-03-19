import React, { Component } from 'react';

class Message extends React.Component {
	constructor() {
		super();
		this.state = {
			message: 'Ahola Vistor Again',
		};
	}
	changeMessage = () => {
		this.setState({ message: 'Arigato' });
	};

	render() {
		return (
			<>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeMessage()}>Not SUBMIT</button>
			</>
		);
	}
}

export default Message;
