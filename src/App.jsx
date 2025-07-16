import { useRef } from "react";



const App=()=>{

 
const number= useRef("initialValue: 0");

const change=()=>{
let number= number.current++;
console.log(number);
}
 
  

  

  return(
   <div>
       
      <button onClick={change}>click</button>

   </div>
  );
};


export default App;