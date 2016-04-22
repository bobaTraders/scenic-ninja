import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';


import Header from './Header';
import PlaceContainer from './PlaceContainer';
import SavedPlaceContainer from './SavedPlaceContainer';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
// import GeoMap from './GeoMap.js';
import $ from 'jquery';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='grid'>
          <PlaceContainer/>
          <SavedPlaceContainer/>
        </div>
      </div>
    );
  }
}

export default App;
