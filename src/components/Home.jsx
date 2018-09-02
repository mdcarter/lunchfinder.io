import React from 'react';
import Reflux from 'reflux';

import Logo from './Logo';
import Address from './Address';
import Store from './../Store';
import Actions from './../Actions';
import Icons from './Icons';

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
    return (
      <div className="page-home">
        <section className="main">
          <Logo />
          <h2>« Where do we eat today ? »</h2>
          <h3>Ask LunchFinder !</h3>
          <h4>This app helps you and your co-workers find a random place to eat everyday</h4>
          <form className="form">
            <Address address={this.state.address || ''} updateAddress={Actions.setCurrentAddress} updateLocation={Actions.setCurrentLocation} />
            <button
              aria-label="Find a restaurant"
              className={this.state.retrievingLocation ? 'find btn-loading' : 'find'}
              type="button"
              onClick={Actions.selectRestaurant}
            >
              {this.state.retrievingLocation === false && <Icons name="Arrow" />}
              {this.state.retrievingLocation !== false && <Icons name="Loader" />}
            </button>
          </form>
          <button className="locate" aria-label="Use my location" onClick={Actions.getCurrentLocation}>
            <Icons name="Locate" /> My location <span className="error">{this.state.error}</span>
          </button>
        </section>

        <footer>
          Handmade by <a href="https://twitter.com/sandralaurin">Sandra Laurin</a> & <a href="https://twitter.com/mdcarter">Maxime Dehaye</a>
        </footer>
      </div>
    );
  }
}
