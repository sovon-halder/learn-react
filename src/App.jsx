import { useRef } from "react";


const App=()=>{
 
  let uss=useRef();
  const change=()=>{
    uss.current.src="https://placehold.co/800?text=Hello+World&font=roboto"

  }
  return(
   <div>
       
       <img ref={uss} src="https://placehold.co/600x400"/>
       <button onClick={change}>click</button>
   </div>
  );
};


export default App