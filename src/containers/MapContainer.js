import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContents from '../components/MapContents'


class MapContainer extends Component {

	render() {
		return (<div className="map-container"><MapContents/></div>);
	}
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmxMOCc0M8JaDLcHQVj5ODOE-AkYbmeOM'
})(MapContainer)


