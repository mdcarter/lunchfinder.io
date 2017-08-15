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
    return (
      <div className="App">
        Hello world.<hr />
        {this.state.restaurant &&
          <div>
            <h2>
              {this.state.restaurant.name}
            </h2>
            <p>
              {this.state.restaurant.location.address} ({this.state.restaurant.categories[0].name})
            </p>
            <pre>
              <code>
                {JSON.stringify(this.state.restaurant, undefined, 1)}
              </code>
            </pre>
          </div>}
      </div>
    );
  }
}

export default App;
