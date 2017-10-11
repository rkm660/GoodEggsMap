import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import {Map,Marker,InfoWindow} from 'google-maps-react';

class MapContents extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.handlers = createHandlers(this.props.dispatch);
        this.state = {
        	"activeMarker": null,
        	"selectedInfoWindow": false
        };
    }

    onMarkerClick(props, marker, e){
		console.log(props,marker,e); 
		this.setState({"activeMarker" : marker});
		this.setState({"selectedInfoWindow": true});
	}

	onMapClick(props, map, e){
		console.log(props, map, e);
		this.setState({activeMarker : null});
		this.setState({selectedInfoWindow: false});
	}

    render() {
    	if (this.props.products && this.props.farmers){
			const farmerMarkers = this.props.farmers.slice(0,1).map(farmer => {
				return (<Marker key={farmer["farmer_ID"]} name={farmer["farmer_name"]} position={{lat: farmer["farmer_lat"], lng: farmer["farmer_lng"]}} onClick={this.onMarkerClick} />);
			});
			return (
			  <Map google={window.google} clickableIcons={false} zoom={3} initialCenter={{lat: 16.815852,lng: -27.973152}} onClick={this.onMapClick}>
			 	{farmerMarkers}
			 	<InfoWindow marker={this.state.activeMarker} visible={this.state.selectedInfoWindow}>
				    <div>
				      <h1>test</h1>
				    </div>
				</InfoWindow>
			  </Map>
			)
		}
		else {
				return (
				  null
				)
			}
	    }

    
}

const mapStateToProps = (state) => ({
    products: state.data.products,
    farmers: state.data.farmers,
});

let createHandlers = function(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps
)(MapContents);



