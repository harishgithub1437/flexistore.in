import React from 'react';
import Herosection from '../components/Herosection';
import Homebody from '../components/Homebody';
import Whyflexistore from '../components/Whyflexistore';
import Features from '../components/Features';
import Casestudy from '../components/Casestudy';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Herosection />
      <Homebody />
      <Whyflexistore />
      <Features />
      <Casestudy />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;