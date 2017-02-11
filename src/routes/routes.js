import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import Home from '../components/pages/Home';
import Resume from '../components/pages/Resume';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path='/resume' component={Resume}/>
  </Route>
);
