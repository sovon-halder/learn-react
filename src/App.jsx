



 
  const App=()=>{

  const a=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      if(!res.ok){
        const a=`error ${res.status}`
        throw new Error (a)
      }
      return res.json();
    })
    .then((res)=>console.log(res))
    .ca

  }


      
  return(
   <div>
    <h1>using fetch method to fetching data</h1>
    <button onClick={a}>click</button>
          
   </div>
  );
};


export default App;