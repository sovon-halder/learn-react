import { useRef } from "react";


const App=()=>{
 
 let firstname,lastname= useRef();
 
  

  const val=()=>{
   let fname= firstname.value;
    let lname= lastname.value;
    alert(fname+ " "+lname)
    
  }

  return(
   <div>
       <input ref={(a)=> firstname= a}placeholder="first name"/><br/>
       <input ref={(b)=> lastname= b}placeholder="last name"/><br/>
       <button onClick={val}>Click</button>

   </div>
  );
};


export default App