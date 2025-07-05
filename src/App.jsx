import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {


  let markes=90;

  return (
    <div>

      {(()=>{
        if(markes>60){
          return <h4> perfect</h4>
        }
      }

      )()}
     
      
     
      
    </div>


  );
};

export default App;