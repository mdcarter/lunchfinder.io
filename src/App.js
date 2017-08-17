import React from 'react';
import Reflux from 'reflux';
import Store from './Store';
import Actions from './Actions';

import Address from './components/Address';

import './styles/App.css';

class App extends Reflux.Component {
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
      <div className="App">
        <Address address={this.state.address || ''} updateAddress={Actions.setCurrentAddress} updateLocation={Actions.setCurrentLocation} />

        <div className="wip">
          {this.state.status.retrievingLocation && <span> - Récupération de votre localisation...</span>}
          {this.state.status.fetchingData && <span> - Chargement...</span>}
          <hr />
          {this.state.latitude && <button onClick={Actions.getRestaurant}>Choisir un restaurant</button>}
          <hr />

          {this.state.latitude &&
            <div>
              Vos coordonnées courante :{' '}
              <strong>
                {this.state.latitude},{this.state.longitude}
              </strong>
            </div>}
          {this.state.address &&
            <div>
              Votre adresse courante : <strong>{this.state.address}</strong>
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
      </div>
    );
  }
}

export default App;
