import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App          from '../App';
import Home         from '../components/pages/Page-Home';
import ResumePage   from '../components/pages/Page-Resume';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path='/resume' component={ResumePage}/>
    <Route path="*" component={Home}/>
  </Route>
);
