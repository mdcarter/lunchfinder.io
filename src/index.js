import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ServiceWorker from './ServiceWorker';

import 'normalize.css';
import './styles/index.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

ServiceWorker();
