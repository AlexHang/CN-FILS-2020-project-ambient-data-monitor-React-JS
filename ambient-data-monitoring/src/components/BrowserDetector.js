import React, { Component } from 'react';
import {isIE} from 'react-device-detect';
import {isChrome} from 'react-device-detect';
import {isFirefox} from 'react-device-detect';
import {isSafari} from 'react-device-detect';
import {isOpera} from 'react-device-detect';

class BrowserDetector extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			geolocatorData : [],
		};
	}
	
	componentDidMount() {
		fetch("http://www.geoplugin.net/json.gp")
		  .then(res => res.json())
		  .then(
			(result) => {
				console.log("done");
				//console.log(result);
			  this.setState({
				isLoaded: true,
				geolocatorData: result
			  });
			  
			  var browsername = "";
			if(isIE)
				 browsername = "IE";
			if(isFirefox)
				 browsername = "Firefox";
			if(isChrome)
				 browsername = "Chrome";
			if(isSafari)
				 browsername = "Safari";
			
		
		fetch("http://localhost/MyWebsites/AmbientDataMonitor/sendBrowserData.php?Browser="+browsername+"&IP="+result["geoplugin_request"])
		  .then(res => res.json())
		  .then(
			(result) => {
				console.log("done");
			
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		)
			  
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
		  
		 const {error, isLoaded, geolocatorData} = this.state;
		
		
			
		  
	}
	
	render(){
		const mystyle = {
		  padding: "10px",
		  fontFamily: "Arial",
		  textAlign:"left",
		  
		};
		
		
		
		const {error, isLoaded, geolocatorData} = this.state;
		
		console.log(geolocatorData);
		return(
			<div style={mystyle}>
				<h2>Browser Data</h2>
				Firefox: {isFirefox.toString()} <br />
				Chrome:   {isChrome.toString()}  <br />
				Safari:   {isSafari.toString()}  <br />
				Opera:   {isOpera.toString()}  <br />
				IE:   {isIE.toString()}  <hr />
				
				<h2>Connection Data</h2>
				IP: {geolocatorData["geoplugin_request"]} <br />
				City: {geolocatorData["geoplugin_city"]} <br />
				Country: {geolocatorData["geoplugin_countryName"]} <br />
				Ping: {geolocatorData["geoplugin_delay"]} <br />
			</div>
		);
		
	}
	
}
 export default BrowserDetector;