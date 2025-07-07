import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {

  const status=false;

    if(status==true){
      return(
        <div>
          status is true;
        </div>
      );
    }else{
      return(
        <div>
          status is false;
        </div>
      );
    }
  






};

export default App;