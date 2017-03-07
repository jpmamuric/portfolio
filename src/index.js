import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import routes from './routes/routes';

ReactDOM.render(
  <Router routes={routes} history={hashHistory}/>,
  document.getElementById('root')
);
