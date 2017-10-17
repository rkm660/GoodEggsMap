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
	console.log(state);
    return ({
        products: state.data.products,
        farmers: state.data.farmers,
    });
}
class App extends Component {

	constructor(props) {
	    super(props);
	    console.log(this.props);
	    this.handlers = createHandlers(this.props.dispatch);
	    this.onCategoryClicked = this.onCategoryClicked.bind(this);
	    this.state = {
	        "alcohol": false,
	        "bakery": false,
	        "dairy": false,
	        "drinks": false,
	        "fish": false,
	        "meats": false,
	        "pantry": false,
	        "prepared": false,
	        "produce": false,
	        "snacks": false
	    }
	}

	componentDidMount() {
	    this.handlers.getData();
	}

	onCategoryClicked(category){
		let updatedState = this.state;
		updatedState[category] = !updatedState[category];
		this.setState(updatedState);
		console.log(this.state);
	}

	render() {
	  	return (
	  	<div className="App">
		    <SideBar farmers={this.props.farmers} products={this.props.products} categories={this.state} categoryClickedCallback={this.onCategoryClicked}/>
		    <MapContainer farmers={this.props.farmers} products= {this.props.products}/>
		    <ProductsBar farmers={this.props.farmers} products={this.props.products} categories={this.state}/>
	  	</div>
		);
	}

}

export default connect(
  mapStateToProps
)(App)