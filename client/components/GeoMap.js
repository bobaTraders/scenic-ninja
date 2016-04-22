import React, {PropTypes, Component } from 'react';
import { connect } from 'react-redux';
var ReactGoogleMaps = require('react-googlemaps');
const GoogleMapsAPI = window.google.maps;

const Map = ReactGoogleMaps.Map;
const Marker = ReactGoogleMaps.Marker;
const OverlayView = ReactGoogleMaps.OverlayView;

class GeoMap extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) => {
    console.log('Clicked at position', e.latLng);
  }

  render() {
    return (
      <Map
        initialZoom={10}
        initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>

        <Marker
          onClick={handleClick}
          position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)} />

        <OverlayView
          style={{backgroundColor: '#fff'}}
          position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
          <p>Some content</p>
        </OverlayView>
      </Map>,
      mountNode
    );
}



class GeoMap extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() => {

  // }

  render() {
    // let marker = new google.maps.Marker;
    // console.log(marker);
    
    return (
      <GoogleMapLoader
        containerElement={
          <div
            // {...this.props}
            style={{
              height: `100%`,
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            // onClick={::this.handleMapClick}
          >
            {this.props.Marker.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  // onRightclick={this.handleMarkerRightclick.bind(this, index)}
                />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }  
}

 export default GeoMap;