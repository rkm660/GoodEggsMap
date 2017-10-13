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

const mapStateToProps = (state) => ({
    products: state.data.products,
    farmers: state.data.farmers,
});

class App extends Component {

	constructor(props){
		super(props);
        console.log(this.props);
        this.handlers = createHandlers(this.props.dispatch);

	}

	componentDidMount() {
	    this.handlers.getData();
	}

	render() {
	  	return (
	  	<div className="App">
		    <SideBar farmers={this.props.farmers} products={this.props.products}/>
		    <MapContainer farmers={this.props.farmers} products= {this.props.products}/>
		    <ProductsBar farmers={this.props.farmers} products={this.props.products}/>
	  	</div>
		);
	}

}

export default connect(
  mapStateToProps
)(App)