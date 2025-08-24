

 
  const App=()=>{ 

 let checker=true;
  return (
    <div>
      <h1>login status</h1>
      {checker && <button>login</button>}
    </div>
  );
  };


export default App;