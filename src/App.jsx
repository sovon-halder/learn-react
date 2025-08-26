
import Hero from './component/Hero';
const App=()=>{ 


  const btn=()=>{
    alert("Button Clicked");
  }

  return (

    <div>
      <Hero pass={btn}/>
    </div>

  );
  };


export default App;