import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Reel from './Reel';
import Footer from './Footer';

const App = () => {
  return(
      <div>
        <NavBar />
        <LandingPage />
        <Reel />
        <Portfolio />
        <About />
        <Footer />
      </div>
  );
};

export default App;
