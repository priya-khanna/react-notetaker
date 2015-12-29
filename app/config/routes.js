//  router.js will export insturcitons on which component to render based on user's path

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, Router, DefaultRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route name="profile" path="profile/:username" component={Profile} />
    <DefaultRoute component={Home} />
  </Route>
);
