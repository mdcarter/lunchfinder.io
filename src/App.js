import React from 'react';
import Reflux from 'reflux';
import { Switch, Route, Router } from 'react-router-dom';
import History from './History';
import Store from './Store';
import Actions from './Actions';

import Home from './components/Home';
import Restaurant from './components/Restaurant';

import './styles/App.css';

export default class App extends Reflux.Component {
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
    return (
      <div className="container-app">
        <Router history={History}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurant/:id" component={Restaurant} />
          </Switch>
        </Router>
      </div>
    );
  }
}
