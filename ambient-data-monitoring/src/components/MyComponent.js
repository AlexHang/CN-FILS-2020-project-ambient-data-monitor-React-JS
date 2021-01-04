import React, { Component } from 'react';
class MyComponent extends React.Component {

			  constructor(props) {
				super(props);
				this.state = {
				  imgSrc : "https://via.placeholder.com/150",//this.props.url,
				  title : this.props.title,
				  postId : this.props.postId
				};

			  }

				


				render() {
					  const { imgSrc, title, postId } = this.state;
					  return (
						<div class="card col-md-3">
						  <img class="card-img-top" src={imgSrc} alt="Card image"/>
						  <div class="card-body">
							<h4><b>{postId}</b> {title}</h4>
							<a href="#" class="btn btn-primary">See Profile</a>
						  </div>
						</div>
					  );
				
				}
			}
			
			export default MyComponent;