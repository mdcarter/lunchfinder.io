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
          <h4>This app helps you and your co-workers find a random place to lunch everyday.</h4>
          <form className="form">
            <Address address={this.state.address || ''} updateAddress={Actions.setCurrentAddress} updateLocation={Actions.setCurrentLocation} />
            <button
              className={this.state.retrievingLocation ? 'find btn-loading' : 'find'}
              type="button"
              onClick={Actions.selectRestaurant}
              disabled={!this.state.latitude ? true : false}
            >
              {this.state.retrievingLocation ? 'Loading...' : 'Find a restaurant !'}
            </button>
          </form>
          <button className="locate" onClick={Actions.getCurrentLocation}>
            <Icons name="Locate" /> My location
          </button>
        </section>

        <footer>
          Handmade by <a href="https://twitter.com/sandralaurin">Sandra Laurin</a> & <a href="https://twitter.com/mdcarter">Maxime Dehaye</a>
        </footer>
      </div>
    );
  }
}
