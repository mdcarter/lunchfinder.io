import React from 'react';
import Reflux from 'reflux';
import Store from './Store';
import Actions from './Actions';

import './styles/App.css';

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentDidMount() {
    Actions.getCurrentLocation();
  }

  render() {
    return <div className="App">Hello world.</div>;
  }
}

export default App;
