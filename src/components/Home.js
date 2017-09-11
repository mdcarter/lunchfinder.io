import React from 'react';
import Reflux from 'reflux';

import Address from './Address';
import Store from './../Store';
import Actions from './../Actions';

import './../styles/Home.css';

export default class Home extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentDidMount() {
    Actions.getDirections('41.0282,28.9784', '41.0082,28.9584');
    Actions.getCurrentLocation();
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    if (this.state.restaurant) {
      return null;
    }

    return (
      <div className="page-home">
        <Address address={this.state.address || ''} updateAddress={Actions.setCurrentAddress} updateLocation={Actions.setCurrentLocation} />
        <div className="wip todelete">
          {this.state.status.retrievingLocation && <span> - Récupération de votre localisation...</span>}
          {this.state.status.fetchingData && <span> - Chargement...</span>}
          <hr />
          {this.state.latitude && <button onClick={Actions.getRestaurant}>Choisir un restaurant</button>}
          <hr />

          {this.state.latitude && (
            <div>
              Vos coordonnées courante :{' '}
              <strong>
                {this.state.latitude},{this.state.longitude}
              </strong>
            </div>
          )}
          {this.state.address && (
            <div>
              Votre adresse courante : <strong>{this.state.address}</strong>
            </div>
          )}
        </div>
      </div>
    );
  }
}
