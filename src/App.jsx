import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';



const App = () => {

  const loginbutton= false;
switch(loginbutton){

    case true:
        return <button>login</button>

    case false:
      return <button>logout</button>

      default:
        return null
}


    };
  








export default App;