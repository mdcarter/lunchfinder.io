import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ServiceWorker from './ServiceWorker';

import 'normalize.css';
import './styles/index.css';

render(<App />, document.getElementById('app'));
ServiceWorker();
