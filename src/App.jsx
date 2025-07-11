import React, { Fragment, useRef } from 'react';




const App=()=>{

  let use=useRef();
 

  const change=()=>{
 use.current.innerText="hi";
  }

 
  return(
<div>
     

<h2 ref={use}></h2>
<button onClick={change}>click</button>





</div>
      

  );
};

export default App;