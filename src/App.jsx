
import { useRef } from 'react';
import Hero from './component/Hero';
const App=()=>{ 

let fname,lname=useRef();

 const change=()=>{
  let fnam=fname.current.value;
  let lnam=lname.current.value;
  alert(fnam+" "+lnam);
 }

  return (

    <div>
      <input ref={fnam} placeholder='First Name' type="text" /><br/>
      <input ref={lnam} placeholder='Last Name' type="text" /><br/>
     
    </div>

  );
  };


export default App;