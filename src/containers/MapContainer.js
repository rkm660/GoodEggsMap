import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContents from '../components/MapContents'

const MapContainer = () => <MapContents />;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmxMOCc0M8JaDLcHQVj5ODOE-AkYbmeOM'
})(MapContainer)