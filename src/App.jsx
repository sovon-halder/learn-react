import React, { Fragment } from 'react';

import Hero from './component/Hero';
import Contact from './component/Contact';
import Header from './component/Header';



const App=()=>{


  const item={
        
    name:"sovon",
    age: 21,
    city:"dhaka",
    phone:'01866955'
  }




  return(
<div>
      <Header itemob={item}/>
</div>
      

  );
};

export default App;