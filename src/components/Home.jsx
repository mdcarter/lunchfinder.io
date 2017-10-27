import React from 'react';
import Reflux from 'reflux';
import { Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Address from './Address';
import Store from './../Store';
import Actions from './../Actions';

import './../styles/Home.css';

export default class Home extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    if (this.state.restaurant) {
      return (
        <Router>
          <Redirect to={`/restaurant/${this.state.restaurant.id}`} push={true} />
        </Router>
      );
    }

    return (
      <div className="page-home">
        <section className="main">
          <h2>Trouvez où manger chaque midi.</h2>
          <h3>Avec LunchFinder, mettez tous vos collègues d’accord.</h3>
          <form className="form">
            <Address address={this.state.address || ''} updateAddress={Actions.setCurrentAddress} updateLocation={Actions.setCurrentLocation} />
            <button className="find" type="button" onClick={Actions.selectRestaurant} disabled={!this.state.latitude ? true : false}>
              {this.state.retrievingLocation ? 'chargement...' : 'Trouver un restaurant'}
            </button>
          </form>
        </section>

        <div className="background" />
      </div>
    );
  }
}
