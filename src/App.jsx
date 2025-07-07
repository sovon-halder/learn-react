import React, { Fragment } from 'react';
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';

const loginbutton=(status)=>{
  if(status){
    return <button>Login</button>
  }else{
    return <button>Logout</button>
  }
}

const App = () => {

return(
  <div>
    <h1a> Login status</h1a>
    {loginbutton(false)}
  </div>
)

    };
  








export default App;