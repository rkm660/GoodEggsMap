import React, {Component} from 'react';
import MapContainer from '../containers/MapContainer';
import SideBar from './SideBar';
import ProductsBar from './ProductsBar';
import { connect } from 'react-redux';
import * as actions from '../actions/';


let createHandlers = function(dispatch) {
	let getData =function(){
		dispatch(actions.getAllProducts());
		dispatch(actions.getAllFarmers());
	}

  	return {
  		getData
  	};
}

const mapStateToProps = (state) => {
    return ({
        products: state.data.products,
        farmers: state.data.farmers,
    });
}
class App extends Component {

	constructor(props) {
	    super(props);
	    this.handlers = createHandlers(this.props.dispatch);
	    this.onCategoryClicked = this.onCategoryClicked.bind(this);
	    this.state = {
	        "categories" : {
	        	"alcohol": false,
		        "bakery": false,
		        "dairy": false,
		        "drinks": false,
		        "fish": false,
		        "meat": false,
		        "pantry": false,
		        "prepared": false,
		        "produce": false,
		        "snacks": false
	        }
	    }
	}

	componentDidMount() {
	    this.handlers.getData();
	}


	onCategoryClicked(category){
		let updatedStateCategories = Object.assign({}, this.state.categories);
		updatedStateCategories[category] = !updatedStateCategories[category];

		this.setState({"categories" : updatedStateCategories});
	}

	render() {
	  	return (
	  	<div className="App">
		    <SideBar farmers={this.props.farmers} products={this.props.products} categories={this.state.categories} categoryClickedCallback={this.onCategoryClicked} productsExposed={this.state.productsExposed}/>
		    <MapContainer farmers={this.props.farmers} products={this.props.products} categories={this.state.categories}/>
		    <ProductsBar farmers={this.props.farmers} products={this.props.products} categories={this.state.categories}/>
	  	</div>
		);
	}

}

export default connect(
  mapStateToProps
)(App)