import React, { Component } from 'react';
import { change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

class Geoloc extends Component {
  setGeoloc = () => {
    const { dispatch } = this.props;
    const geoloc = "127.0.0.1";
    dispatch(change('sample', 'geolocalisation', geoloc));
  }

  render() { 
    const { geoValue } = this.props;
    return (
      <div className="Geoloc">
        <button type="button" onClick={this.setGeoloc}>Geoloc</button>
        <div>
          {geoValue || 'Pas de géolocalisation'}
        </div>
      </div>
    );
  }
}

const selector = formValueSelector('sample') // <-- same as form name
const mstp = state => ({
  geoValue: selector(state, 'geolocalisation')
})

 
export default connect(mstp)(Geoloc);