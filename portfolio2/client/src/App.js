import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetComponent from './components/GetComponent';
import GetAllComponent from './components/GetAllComponent';
import PutComponent from './components/PutComponent';
import PatchComponent from './components/PatchComponent';
import DeleteComponent from './components/DeleteComponent';

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
							<Link to='/getAll'>GET All</Link>
						</li>
						<li>
							<Link to='/patch'>PATCH</Link>
						</li>
						<li>
							<Link to='/delete'>DELETE</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path='/' component={PutComponent} />
					<Route exact path='/get' component={GetComponent} />
					<Route exact path='/patch' component={PatchComponent} />
					<Route exact path='/delete' component={DeleteComponent} />
					<Route exact path='/getAll' component={GetAllComponent} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
