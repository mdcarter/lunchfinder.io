import React from 'react';
import Reflux from 'reflux';
import Store from './Store';

import Home from './components/Home';
import Restaurant from './components/Restaurant';

import './styles/App.css';

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    return (
      <div className="container-app">
        <Home />
        <Restaurant />
      </div>
    );
  }
}
