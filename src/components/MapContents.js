import React from 'react'
import { connect } from 'react-redux'
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react';


const MapContents = ({products, farmers}) => {
	
	if (products && farmers){
		const farmerMarkers = farmers.map(farmer => {
			console.log(farmer);
		});
		return (
		  <Map google={window.google}
		          clickableIcons={false}>
		 	{farmerMarkers}
		  </Map>
		)
	}

	else {
		return null;
	}
}
	

const mapStateToProps = (state) => ({
	products: state.data.products,
	farmers: state.data.farmers
})

export default connect(
  mapStateToProps
)(MapContents);