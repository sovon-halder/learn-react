import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';



const App = () => {

  const loginbutton= false;

return(

<div>

  {
  loginbutton == true?
    <button>login</button>
    :<button>logout</button>
}
</div>


)

    };
  








export default App;