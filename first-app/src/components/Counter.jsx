import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	// changeCount() {
	// 	this.setState((prevState) => {
	// 		count: prevState.count++;
	// 	});
	// }
	changeCountInc() {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	}
	changeCountDec() {
		if (this.state.count > 0) {
			this.setState((prevState) => {
				return { count: prevState.count - 1 };
			});
		}
	}
	changeCountFive() {
		const t0 = performance.now();
		let count = this.state.count;
		count += 5;
		this.setState({ count: count });
		const t1 = performance.now();
		const timeInSeconds = (t1 - t0) / 1000;
		console.log(`Time taken: ${timeInSeconds} seconds`);
	}

	render() {
		return (
			<>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.changeCountInc()}>Increase</button>
				<button onClick={() => this.changeCountDec()}>Decrease</button>
				<button onClick={() => this.changeCountFive()}>Inc Five</button>
			</>
		);
	}
}

export default Counter;
