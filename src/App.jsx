import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {


  let city=[56,38,543,2,21,14,124,34,53,46];

  return (
    <ul>
      {
        city.map((item)=>{
          return <li>{item}</li>
        })
      }
    </ul>
    
  );
};

export default App;