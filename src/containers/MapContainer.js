import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContents from '../components/MapContents'

const MapContainer = () => <div className="map-container"><MapContents /></div>;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmxMOCc0M8JaDLcHQVj5ODOE-AkYbmeOM'
})(MapContainer)