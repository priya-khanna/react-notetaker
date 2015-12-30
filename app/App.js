// Instead of rendering static Main component, we will render Root component.
// When route will change, router will run and pass component we want to render. We wil define Root inside routes.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, History } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('example')
)






// Router.run(routes, (Root, state){
//   React.render(<Root {...state}/> document.getElementById('example'));
// });
// spread attributes(state object we are getting from react router, it will take the properties state has like path etc and copy them to Root's props, so we have access to these properties inside of other components as well)


// import history from 'history'

// ReactDOM.render(
//   <Router history={history}>
//     <Route name="app" path="/" component={Main}>
//       <Route name="profile" path="profile/:username" component={Profile} />
//     </Route>
//   </Router>,
//   document.getElementById('example')
// )

