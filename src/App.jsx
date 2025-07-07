import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';



const App = () => {

  const loginbutton= true;

return(

<div>

  {
  loginbutton?
    <button>login</button>
    :<button>logout</button>
}
</div>


)

    };
  








export default App;