import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetComponent from './components/GetComponent';
import PutComponent from './components/PutComponent';
import PostComponent from './components/PostComponent';

function App() {
  
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>PUT</Link>
						</li>
						<li>
							<Link to='/get'>GET</Link>
						</li>
						<li>
							<Link to='/post'>POST/PATCH/DELETE</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path='/' component={PutComponent} />
					<Route exact path='/get' component={GetComponent} />
					<Route exact path='/post' component={PostComponent} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
