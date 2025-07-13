import { useRef } from "react";


const App=()=>{
  
const uee = useRef();
const acm =()=>{
  uee.current.innerHTML="<ul><li>home</li><li>blog</li><li>contact</li></ul>"
}

  return(
   <div>
          <h1 ref={uee}></h1>
          <button onClick={acm}>press here</button>
   </div>
  );
};


export default App