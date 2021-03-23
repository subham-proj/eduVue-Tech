import React from 'react';
import './App.css';

import Banner from './components/Banner';
import About from './components/about';
import Count from './components/eduvue';
import TwoPoint from './components/problem';
import Team from './components/team';
import Footer from './components/footer';



function App() {
  return (
    <>
    <Banner/>

    <About/>
    <TwoPoint/>
    <Team/>
    <Count/>
    <Footer/>
    </>
  );
}

export default App;
