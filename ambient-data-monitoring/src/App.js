import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CardsList from './components/CardsList.js';
import MyComponent from './components/MyComponent.js';
import BrowserDetector from './components/BrowserDetector.js';
import NavBar from './components/NavBar.js';
import BrowserDataView from './components/BrowserDataView.js';


function App() {
  return (
    <div className="App">
      <NavBar>
	  </NavBar>
	  
	  <Router>
		  <div>


			{/*
			  A <Switch> looks through all its children <Route>
			  elements and renders the first one whose path
			  matches the current URL. Use a <Switch> any time
			  you have multiple routes, but you want only one
			  of them to render at a time
			*/}
			<Switch>
			  <Route exact path="/">
				<Home />
			  </Route>
			  <Route path="/about">
				<About />
			  </Route>
			  <Route path="/userPortal">
				<UserPortal />
			  </Route>
			  <Route path="/dashboard">
				<Dashboard />
			  </Route>
			</Switch>
		  </div>
		</Router>
		
		
	  
	  
	  
	  
    </div>
  );
}


function Home() {
	
	function submitForm(e){

		e.preventDefault();
		var user = document.getElementById("username").value;
		var pass = document.getElementById("password").value;
		console.log('The link was clicked.');
		
		
		
		if(user == "admin" && pass == "admin"){
			window.location.href="/dashboard";
		}else{
			if(user!="admin"){
				window.location.href="/userPortal";
				/*
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						if(this.responseText=="ok"){
							window.location.href="/userPortal";
						}
					}
				};
				xhttp.open("GET", "ajax_info.txt", true);
				xhttp.send();
				*/
			}
			
		}
		
  
	}
	
  return (
    <div id="login">
        <h3 class="text-center text-white pt-5">Login</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <div id="login-form" class="form" action="" style={{textAlign:"left",}} method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br />
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br />
                                <input type="password" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br />
                                <a href="#" onClick={submitForm} class="btn btn-info btn-md">Submit</a>
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="#" class="text-info">Register here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <div class="container-fluid" style={{minHeight:"100vh",}}>
		  
		   <div class="row">
			<div class="col-md-3" style={{backgroundColor:"#282c34", color:"white",minHeight:"100vh",}}>
				<BrowserDetector>
				</BrowserDetector>
			</div>
			<div class="col-md-9" >
				<BrowserDataView>
				</BrowserDataView>
			</div>
		  </div>
		</div>
    </div>
  );
}

function UserPortal() {
  return (
    <div>
      <div class="container-fluid">
		  
		   <div class="row">
			<div class="col-md-3" style={{backgroundColor:"#282c34", color:"white"}}>
				<BrowserDetector>
				</BrowserDetector>
			</div>
			<div class="col-md-9" >
				<CardsList/>
			</div>
		  </div>
		</div>
    </div>
  );
}

export default App;
