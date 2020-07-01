import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Apartments from '../pages/Apartments';
import SingleApartment from '../pages/SingleApartment';
import Error from '../pages/Error';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apartments" component={Apartments} />
        <Route exact path="/apartments/:slug" component={SingleApartment} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
