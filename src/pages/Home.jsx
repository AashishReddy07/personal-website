import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="home-container">
      <About />
      <hr />
      <Skills />
      <hr />
    </div>
  );
};

export default Home;