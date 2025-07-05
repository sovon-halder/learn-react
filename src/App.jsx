import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {


  let city=['dhaka','london','panjab','lahor'];

  return (
    <div>

      <ul>
        {

          city.map((item,i)=>{
            return <li key={i.toString()}> {item}</li>
          })

        }

        
      </ul>


    </div>


  );
};

export default App;