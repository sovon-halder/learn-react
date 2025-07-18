



 
  const App=()=>{

  const a=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>res.json())
    .then((res)=>console.log(res))

  }


      
  return(
   <div>
    <h1>using fetch method to fetching data</h1>
    <button onClick={a}>click</button>
          
   </div>
  );
};


export default App;