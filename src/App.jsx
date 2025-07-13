import { useRef } from "react";


const App=()=>{
  const usa=useRef();
const action=()=>{
usa.current.innerText="love you sovon"
}

  return(
   <div>
<h2 ref={usa}></h2>
<button onClick={action}>click here</button>
   </div>
  );
};


export default App