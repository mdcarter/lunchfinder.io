import React from 'react';
import Reflux from 'reflux';

import Store from './../Store';
import Actions from './../Actions';

import './styles/Restaurant.css';

export default class Restaurant extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentDidMount() {
    Actions.getCurrentLocation();
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    if (!this.state.restaurant) {
      return null;
    }

    return (
      <div className="page-restaurant">
        <h2>Restaurant proposé: {this.state.restaurant.name}</h2>
        <p>
          {this.state.restaurant.location.address} ({this.state.restaurant.categories[0].name})
        </p>
        <pre>
          <code>{JSON.stringify(this.state.restaurant, undefined, 1)}</code>
        </pre>
        <button onClick={Actions.getRestaurant}>Un autre svp</button>
      </div>
    );
  }
}
