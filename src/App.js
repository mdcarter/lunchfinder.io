import React from 'react';
import Reflux from 'reflux';
import { Switch, Route } from 'react-router-dom';
import Store from './Store';
import Actions from './Actions';

import Home from './components/Home';
import Restaurant from './components/Restaurant';

import Categories from './tmp.json';
import './styles/App.css';

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
    console.log(Categories);
  }

  componentDidMount() {
    Actions.getCurrentLocation();
  }

  componentWillUnmount() {
    Reflux.Component.prototype.componentWillUnmount.call(this);
  }

  render() {
    return (
      <div className="container-app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant/:id" component={Restaurant} />
        </Switch>
      </div>
    );
  }
}
