import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import {Map,Marker,InfoWindow} from 'google-maps-react';

let createHandlers = function(dispatch) {
	let getData =function(){
		dispatch(actions.getAllProducts());
		dispatch(actions.getAllFarmers());
	}

  return {
  	getData
  };
}

class MapContents extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.onMapReady = this.onMapReady.bind(this);
        this.handlers = createHandlers(this.props.dispatch);
        this.state = {
        	"activeMarker": null,
        	"activeFarmer": 0,
        	"selectedInfoWindow": false
        };
    }

    componentDidMount(){
    	this.handlers.getData();
    }

    onMarkerClick(props, marker, e){
		//console.log(props,marker,e); 
		this.setState({"activeMarker" : marker});
		this.setState({"selectedInfoWindow": true});
		this.setState({"activeFarmer": props.index});
		console.log(props.map.setCenter(marker.getPosition()));

	}

	onMapClick(props, map, e){
		console.log(props, map, e);
		this.setState({activeMarker : null});
		this.setState({selectedInfoWindow: false});
		this.setState({"activeFarmer": 0});
	}

	onMapReady(mapProps, map){
		console.log("Map Ready!", mapProps, map);
	}

    render() {
    	
    	if (this.props.products && this.props.farmers){
			let farmerMarkers = this.props.farmers.map(farmer => {
				return (<Marker key={farmer["farmer_ID"]} id={farmer["farmer_ID"]} index={this.props.farmers.indexOf(farmer)} name={farmer["farmer_name"]} position={{lat: farmer["farmer_lat"], lng: farmer["farmer_lng"]}} onClick={this.onMarkerClick} />);
			});
			return (
			  <Map google={window.google} onReady={this.onMapReady} clickableIcons={false} zoom={3} initialCenter={{lat: 16.815852,lng: -27.973152}} onClick={this.onMapClick}>
			 	{farmerMarkers}
			 	<InfoWindow marker={this.state.activeMarker} visible={this.state.selectedInfoWindow}>
				    <div>
				      <h1>{this.props.farmers[this.state.activeFarmer]["farmer_name"]}</h1>
				      <img alt={this.props.farmers[this.state.activeFarmer]["farmer_name"]} src={"https://" + this.props.farmers[this.state.activeFarmer]["farmer_pic"]} height="50%" width="50%"/>
				    </div>
				</InfoWindow>
			  </Map>
			)
		}
		else {
				return (null)
			 }
	    }

    
}

const mapStateToProps = (state) => ({
    products: state.data.products,
    farmers: state.data.farmers,
});

export default connect(
  mapStateToProps
)(MapContents);



