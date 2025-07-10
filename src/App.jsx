import React, { Fragment } from 'react';




const App=()=>{

  const postForm=(event)=>{
event.preventDefault();
alert("from submited");
  }

  return(
<div>
     


<form onSubmit={postForm}>
  <input placeholder='name' type='text'/>
  <button type="submit" >submit</button>
</form>




</div>
      

  );
};

export default App;