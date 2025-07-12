import React, { Fragment, useEffect, useRef } from 'react';




const App=()=>{

  const user=useRef(null);
 useEffect(()=>{
      user.current.focus();
 });



 
  return(
<div>
     

<input ref={user} type="text" placeholder="enter something"/>





</div>
      

  );
};

export default App;