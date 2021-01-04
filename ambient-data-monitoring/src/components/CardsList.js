import React, { Component } from 'react';
import MyComponent from './MyComponent.js'
class CardsList extends React.Component {
				constructor(props) {
					super(props);
					this.state = {
					  error: null,
					  isLoaded: false,
					  items: []
					};
				}
				
				componentDidMount() {
				fetch("http://localhost/MyWebsites/AmbientDataMonitor/getAmbientData.php")
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
			  render() {
				const { error, isLoaded, items } = this.state;
				return(
					<table class="table table-hover table-striped table-bordered" style={{width:"85%"}}>
					  <thead>
						<tr>
						  <th scope="col">ID</th>
						  <th scope="col">Location</th>
						  <th scope="col">Temperature</th>
						  <th scope="col">Date</th>
						</tr>
					  </thead>
					  <tbody>
						{items.map(item => (
								<tr>
								  <th scope="row">{item.Id}</th>
								  <td>{item.Location}</td>
								  <td>{item.Temperature}</td>
								  <td>{item.Date}</td>
								</tr>
							  ))}
					  </tbody>
					</table>
					)
			  }
				
			}
export default CardsList;		
			