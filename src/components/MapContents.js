import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Map,Marker,InfoWindow} from 'google-maps-react';


const mapStateToProps = (state) => ({
    products: state.data.products,
    farmers: state.data.farmers,
});

class MapContents extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.onMapReady = this.onMapReady.bind(this);
        this.state = {
        	"activeMarker": null,
        	"activeFarmer": 0,
        	"selectedInfoWindow": false,
        	"initialMapCenter" : {lat: 37.964018,lng: -1.107263}
        };
    }

    onMarkerClick(props, marker, e){
		this.setState({"activeMarker" : marker});
		this.setState({"selectedInfoWindow": true});
		this.setState({"activeFarmer": props.index});
		props.map.panTo(marker.getPosition());
		props.map.panBy(0,-200);
	}

	onMapClick(props, map, e){
		console.log(props, map, e, this.state);
		this.setState({activeMarker : null});
		this.setState({selectedInfoWindow: false});
		this.setState({"activeFarmer": 0});
	}

	onMapReady(mapProps, map){
		console.log("Map Ready!", mapProps, map);
		this.setState({initialMapCenter: map.getCenter()})
	}

    render() {
    	
    	if (this.props.products && this.props.farmers){
			let farmerMarkers = this.props.farmers.map(farmer => {
				return (<Marker key={farmer["farmer_ID"]}
								id={farmer["farmer_ID"]} 
								title={farmer["farmer_name"]} 
								index={this.props.farmers.indexOf(farmer)} 
								name={farmer["farmer_name"]} position={{lat: farmer["farmer_lat"], lng: farmer["farmer_lng"]}} 
								onClick={this.onMarkerClick}
								icon={{url:"https://" + farmer["farmer_pic"],
									   anchor: new window.google.maps.Point(32,32),
      								   scaledSize: new window.google.maps.Size(25,25)}} />);
			});

			const style = {
   				width: '60%',
    			height: '100%',
			};
			return (
			  <Map google={window.google} onReady={this.onMapReady} clickableIcons={false} zoom={2} initialCenter={this.state.initialMapCenter} onClick={this.onMapClick} style={style}>
			 	{farmerMarkers}
			 	<InfoWindow marker={this.state.activeMarker} visible={this.state.selectedInfoWindow}>
				    <div>
					    <div className="text-center row">
					      <h4>{this.props.farmers[this.state.activeFarmer]["farmer_name"]}</h4>
					    </div>
					    <div className="row">
					      <span className="col-md-6"><img alt={this.props.farmers[this.state.activeFarmer]["farmer_name"]} src={"https://" + this.props.farmers[this.state.activeFarmer]["farmer_pic"]} height="100%" width="100%"/></span>
					      <span className="col-md-6">
						      <strong>Vendor Page: </strong><a target="_blank" href={"https://www.goodeggs.com/" + this.props.farmers[this.state.activeFarmer]["farmer_ID"]}><h6>{"goodeggs.com/"+this.props.farmers[this.state.activeFarmer]["farmer_ID"]}</h6> </a>
						      <strong>Vendor Website: </strong><a target="_blank" href={this.props.farmers[this.state.activeFarmer]["farmer_website"]}><h6>{this.props.farmers[this.state.activeFarmer]["farmer_website"]}</h6> </a>
						      <strong>Vendor Location: </strong><h6>{this.props.farmers[this.state.activeFarmer]["farmer_address"]}</h6>
					      </span>
					    </div>
					    <div className="row info-window-description">
					    	<span className="col-md-12">
						      <strong>Description: </strong><h6>{this.props.farmers[this.state.activeFarmer]["farmer_description"]}</h6> 
					    	</span>
					    </div>
					</div>
				</InfoWindow>
			  </Map>
			)
		}
		else {
				return (<div><h4></h4></div>)
			 }
	    }

    
}


export default connect(
  mapStateToProps
)(MapContents);



