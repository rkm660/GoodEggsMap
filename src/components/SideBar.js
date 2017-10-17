import React, { Component } from 'react';

class SideBar extends Component {

	constructor(props){
		super(props);
		this.onCategoryClicked = this.onCategoryClicked.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.state = {
			categoriesChecked : {}
		};
		console.log(props);
		for (let category in props.categories){
			this.state.categoriesChecked[category] = 'list-group-item-success';
		}
	}

	onCategoryClicked(category){
		console.log(this.props.categories);
		this.props.categoryClickedCallback(category);
		this.toggleClass(category);
	}

	toggleClass(category){
		this.state.categoriesChecked[category] = this.state.categoriesChecked[category] == 'list-group-item-success' ? '' : 'list-group-item-success';
		console.log(this.state.categoriesChecked);
	}

  	render() {

	    return (
	    	<div className="sidebar">
	    		<nav className="navbar navbar-inverse bg-inverse">
				</nav>
				<ul className="list-group">
				  <li onClick={() => this.onCategoryClicked('alcohol')} className={"list-group-item product-category-item " + this.state.categoriesChecked['alcohol']}><h3>Alcohol</h3></li>
				  <li onClick={() => this.onCategoryClicked('bakery')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['bakery']}><h3>Bakery</h3></li>
				  <li onClick={() => this.onCategoryClicked('dairy')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['dairy']}><h3>Dairy</h3></li>
				  <li onClick={() => this.onCategoryClicked('drinks')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['drinks']}><h3>Drinks</h3></li>
				  <li onClick={() => this.onCategoryClicked('fish')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['fish']}><h3>Fish</h3></li>
				  <li onClick={() => this.onCategoryClicked('meats')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['meats']}><h3>Meats</h3></li>
				  <li onClick={() => this.onCategoryClicked('pantry')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['pantry']}><h3>Pantry</h3></li>
				  <li onClick={() => this.onCategoryClicked('prepared')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['prepared']}><h3>Prepared</h3></li>
				  <li onClick={() => this.onCategoryClicked('produce')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['produce']}><h3>Produce</h3></li>
				  <li onClick={() => this.onCategoryClicked('snacks')} className={"list-group-item product-category-item "  + this.state.categoriesChecked['snacks']}><h3>Snacks</h3></li>
				</ul>

	    	</div>
	    );
  	}
}

export default SideBar;
