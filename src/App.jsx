

 
  const App=()=>{ 

  return (
    <div>
   {(()=>{
    if(true){
      return <h1>welcome</h1>;
    }else{
      return <h1>getlost</h1>;
    }
   })()}
    </div>
  );
  };


export default App;