import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';

const App = () => {
  return(
      <div>
        <LandingPage />
        <NavBar />
        <About />
        <Portfolio />
      </div>
  );
};

export default App;
