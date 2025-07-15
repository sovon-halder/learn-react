import { useRef } from "react";


const App=()=>{
 
  let firstname= useRef();
  let lastname= useRef();

  const val=()=>{
    let fname= firstname.current.value;
    let lname= lastname.current.value;
    alert(fname+ " "+lname)
  }

  return(
   <div>
       <input ref={firstname} placeholder="first name"/><br/>
       <input ref={lastname} placeholder="last name"/><br/>

       <button onClick={val}>Click</button>

   </div>
  );
};


export default App