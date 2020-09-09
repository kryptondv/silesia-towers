import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './footer/Footer';
import HomePage from '../pages/HomePage';
import ApartmentsPage from '../pages/ApartmentsPage';
import SingleApartmentPage from '../pages/SingleApartmentPage';
import ErrorPage from '../pages/ErrorPage';
import ContactPage from '../pages/ContactPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mieszkania" component={ApartmentsPage} />
        <Route path="/mieszkania/:slug" component={SingleApartmentPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
