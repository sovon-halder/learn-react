import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {


  let markes=99;

  return (
    <div>

        {markes>80?<h2>briliant result</h2>:<h4>quit good</h4>}
      
     
      
    </div>


  );
};

export default App;