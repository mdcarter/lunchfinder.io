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
        Lunch Finder {this.state.loading && <span> - Chargement...</span>}
        <hr />
        {this.state.latitude &&
          <div>
            Vos coordoonées courante : {this.state.latitude},{this.state.longitude}
          </div>}
        {this.state.address &&
          <div>
            Votre addresse courante : {this.state.address}
          </div>}
        {this.state.restaurant &&
          <div>
            <hr />
            <h2>
              Restaurant proposé: {this.state.restaurant.name}
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
