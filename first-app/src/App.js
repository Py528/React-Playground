import logo from './logo.svg';
import './App.css';
import { Stateless } from './stateless';
import { StateFull } from './stateless';

function App() {
	return (
		<div className="App">
			<Stateless />
			<StateFull name="React" />
		</div>
	);
}

export default App;
