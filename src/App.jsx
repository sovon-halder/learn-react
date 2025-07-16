import { useRef } from "react";



const App=()=>{

 
const myHeadline= useRef();
const change=()=>{
  myHeadline.current.classList.remove('text-success');
  myHeadline.current.classList.add('text-danger');

}
 
  

  

  return(
   <div>
       <h1 className="text-success" ref={myHeadline}>this is headline</h1>
       <button onClick={change}>click</button>

   </div>
  );
};


export default App;