import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
    	<div className="sidebar">
    		<nav className="navbar navbar-inverse bg-inverse">
				<a className="navbar-brand" href="#">Good Eggs Farmers</a>
			</nav>
			<ul className="list-group">
			  <li className="list-group-item product-category-item">Alcohol <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Bakery <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Dairy <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Drinks <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Fish <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Meat <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Pantry <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Prepared <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item">Produce <span className="badge badge-default badge-pill">14</span></li>
			  <li className="list-group-item product-category-item" >Snacks <span className="badge badge-default badge-pill">14</span></li>
			</ul>

    	</div>
    );
  }
}

export default SideBar;
