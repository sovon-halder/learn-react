
import { useRef } from 'react';
import Hero from './component/Hero';
const App=()=>{ 

const uss=useRef();

 const ready=()=>{
  uss.current.innerText="hello world";
  uss.current.style.color="red";
 }

  return (

    <div>
      <h1 ref={uss}>welcome to react</h1>
      <button onClick={ready}>click</button>
        
     
    </div>

  );
  };


export default App;