import './App.css';
import Stateless from './components/stateless';
import StateFull from './components/statefull';
import NoJSX from './components/NoJSX';
import Message from './components/Message';
import Counter from './components/Counter';
import Quiz from './components/Quiz';
import WholeScreenKey from './components/WholeScreenKey';
function App() {
	return (
		<div className="App">
			{/* <Stateless name="React" />
			<StateFull name="React" /> */}
			{/* <NoJSX /> */}
			<Message />
			<Counter />
			<Quiz />
			<WholeScreenKey />
		</div>
	);
}

export default App;
