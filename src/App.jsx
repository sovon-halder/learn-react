

 
  const App=()=>{ 

  return (
    <div>
    {(()=>{
      if(false){
        return <h1>Hello World</h1>
      }else{
        return <h1>Goodbye World</h1>
      }
    })()}
    </div>
  );
  };


export default App;