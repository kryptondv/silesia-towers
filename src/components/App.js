import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Apartments from '../pages/Apartments';
import SingleApartment from '../pages/SingleApartment';
import Error from '../pages/Error';
import Navbar from './Navbar';
import Contact from '../pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mieszkania" component={Apartments} />
        <Route exact path="/mieszkania/:slug" component={SingleApartment} />
        <Route exact path="/kontakt" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
