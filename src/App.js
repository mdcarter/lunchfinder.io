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
    Actions.getCategories();
    console.log(process.env);
  }

  render() {
    return (
      <div className="App">
        Hello world.<hr />
        {this.state.categories &&
          this.state.categories.map((el, i) =>
            <label className="" key={el.id}>
              <input type="checkbox" checked value={el.id} /> {el.name}
            </label>
          )}
      </div>
    );
  }
}

export default App;
