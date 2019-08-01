import styles from './styles.json';

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.5063157,
      lng: 30.6983413
    },
    zoom: 17
  };

  render() {
    const mapOptions = {
      styles, // straight out of something like snazzymaps
      scrollwheel: false,
  };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '450px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCH_A4mAPJZUEPgOETHb6fEWWgxvI0F30M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;