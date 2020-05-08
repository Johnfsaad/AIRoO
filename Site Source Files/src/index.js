import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import firebase, {auth, provider} from './firebase'

import './index.css';
import './css/styles_co.css';
import './css/image.css';
import './css/bootstrap.css';
import './css/style.css';

import Home from './components/Home/HomePrototype';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Section from './components/Navigation/Section';

class AppRouter extends React.Component{
	constructor(props){
		super(props);
		this.state = {user: null}
		this.logOutUser = this.logOutUser.bind(this);
	}

	componentDidMount(){
		auth.onAuthStateChanged(user => {
			if(user){
				this.setState({
					user
				});
			}
		});

		var loadScript = function (src) {
			var tag = document.createElement('script');
			tag.type =  'text/jsx';
			tag.async = false;
			tag.src = src;
			var body = document.getElementsByTagName('body')[0];
			body.appendChild(tag);
		}

		loadScript("./js/jquery-2.2.3.min.js");
		loadScript("./js/bootstrap.js");
		loadScript("./js/b_script.js");
		loadScript("./js/easing.js");
		loadScript("./js/jQuery_menu.js");
		loadScript("./js/move-top.js");
		loadScript("./js/respond.min.js");
		loadScript("./js/script_co.js");
		loadScript("./js/scroll.js");
		loadScript("./js/SmoothScroll.min.js")
		loadScript("./js/suspend.js");;
	}

	logOutUser = () => {
		firebase.auth().signOut()
			.then(window.location = "/");
	};

	render(){
		return(
			<Router>
				<div className="app">
					<img src={require("./images/banner_c.jpg")} />
					<nav className="main-nav">
						{!this.state.user && 
							<div>
								<Link to="/">Home</Link>
								<Link to="/login">Login</Link>
								<Link to="/register">Register</Link>
							</div>
						}

						{this.state.user &&
							<div>
								<Link to="/">Home</Link>
								<Link to="/section">Section</Link>
								<a href="#!" onClick={this.logOutUser}>Logout</a>
							</div>
						}
					</nav>

					<Switch>
						<Route path="/" exact render={() => <Home user={this.state.user}/>} />
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route path="/section" exact component={Section} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const NoMatch = ({location}) => <div>No route match for {location.pathname}</div>;

ReactDOM.render(
	<AppRouter />, 
	document.getElementById('root')
);