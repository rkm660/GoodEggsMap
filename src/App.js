import React, { Component } from 'react';
import Nav from  './Nav';
import MapContainer from './MapContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Nav/>
      	<MapContainer />
      </div>
    );
  }
}

export default App;
