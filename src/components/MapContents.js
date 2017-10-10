import React from 'react'
import { connect } from 'react-redux'
import {Map,Marker} from 'google-maps-react';


const MapContents = ({products, farmers}) => {
	
	if (products && farmers){
		const farmerMarkers = farmers.map(farmer => {
			return (<Marker key={farmer["farmer_ID"]} name={'test'} position={{lat: farmer["farmer_lat"], lng: farmer["farmer_lng"]}} onClick={onMarkerClick} />);
		});
		return (
		  <Map google={window.google}
		          clickableIcons={false}>
		 	{farmerMarkers}
		  </Map>
		)
	}
	else {
		console.log("here");
		return (
		  <Map google={window.google}
		          clickableIcons={false}>
		  </Map>
		)
	}
}
	
const onMarkerClick = (props, marker, e) => {
	console.log(props,marker,e); 
}

const mapStateToProps = (state) => ({
	products: state.data.products,
	farmers: state.data.farmers
})

export default connect(
  mapStateToProps
)(MapContents);