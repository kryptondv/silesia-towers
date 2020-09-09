import React from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import Contact from '../components/contact/Contact';


const ContactPage = ({history}) => {
  return (
    <>
      <Hero page="contact">
        <Banner subtitle="Kontakt">
          <Contact history={history}/>
        </Banner>
      </Hero>
    </>
  );
}

export default ContactPage;
