import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';



const App = () => {
  const ite=false;
return(

<div>
{(()=>{
    if(ite==true){return<button>ok</button>}else{
return <button>not ok</button>
    }
})()}

</div>


)

    };
  








export default App;