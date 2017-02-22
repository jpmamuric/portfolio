import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App      from '../App';
import Home     from '../components/pages/Page-Home';
import Resume   from '../components/pages/Page-Resume';
import Contact  from '../components/pages/Page-Contact';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path='/resume' component={Resume}/>
    <Route path='/contact' component={Contact}/>
  </Route>
);
