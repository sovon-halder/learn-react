



 
  const App=()=>{

    const a=()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/103").then((res)=> {
        if(!res.ok){
          const mass=`Error:${res.status}`
          throw new Error(mass)
        }
        return res.json()
      })
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    }


      
  return(
   <div>
    <h1>hello</h1>
    <button onClick={a}>click</button>
          
   </div>
  );
};


export default App;