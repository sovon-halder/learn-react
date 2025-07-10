import React, { Fragment } from 'react';

import Hero from './component/Hero';
import Contact from './component/Contact';
import Header from './component/Header';



const App=()=>{

const btn=()=>{
  alert("hello devlopers ");
}



  return(
<div>
      <Header alertBtn={btn}/>
</div>
      

  );
};

export default App;