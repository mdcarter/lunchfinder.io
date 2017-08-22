import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ServiceWorker from './ServiceWorker';

import 'normalize.css';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('app'));
ServiceWorker();
