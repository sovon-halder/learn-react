import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {


  let markes=55;

  return (
    <div>

    {(
      ()=>{
            if(markes>90 && markes<100){
              return(<h1>A+</h1>)
            }
            else if(markes>80 && markes<89){
              return (<h1>A gread</h1>)
            }
            else if(markes>70 && markes<79){
              return 'A-'
            }
            else if(markes>60 && markes<69){
              return "A"
            }
            else if(markes>50 && markes<59){
              return 'B'
            }
            
      }
    )()}
     
      
     
      
    </div>


  );
};

export default App;