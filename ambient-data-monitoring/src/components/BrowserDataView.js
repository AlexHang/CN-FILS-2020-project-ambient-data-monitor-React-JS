import React, { Component } from 'react';

class BrowserDataView extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	}
				
	componentDidMount() {
		fetch("http://localhost/MyWebsites/AmbientDataMonitor/getBrowserData.php")
		  .then(res => res.json())
		  .then(
			(result) => {
				console.log("done");
			  this.setState({
				isLoaded: true,
				items: result
			  });
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
		  
	}
	render(){
		const { error, isLoaded, items } = this.state;
		return(
			<table class="table table-hover table-striped table-bordered" style={{width:"85%"}}>
			  <thead>
				<tr>
				  <th scope="col">#</th>
				  <th scope="col">IP address</th>
				  <th scope="col">Browser</th>
				  <th scope="col">Date Time</th>
				</tr>
			  </thead>
			  <tbody>
				{items.map(item => (
						<tr>
						  <th scope="row">{item.DataId}</th>
						  <td>{item.IP}</td>
						  <td>{item.Browser}</td>
						  <td>{item.DateTime}</td>
						</tr>
					  ))}
			  </tbody>
			</table>
		);
	}
}

export default BrowserDataView;