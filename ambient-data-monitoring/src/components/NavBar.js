import React, { Component } from 'react';
class NavBar extends React.Component {
		
	constructor(props) {
		super(props);
	}
	
	render(){
		const mystyle = {
		  backgroundColor: "#282c34",
		  padding: "10px",
		  fontFamily: "Arial",
		  textAlign:"left",
		  color:"white",
		  width:"100%",
		  
		};
		return(
			<div style={mystyle}>
				<div className="container-fluid">
					<div class="col-md-3" style={{fontSize:"30px"}}>
						Ambient Data Monitoring
					</div>
				</div>
			</div>
		);
	}

}

export default NavBar