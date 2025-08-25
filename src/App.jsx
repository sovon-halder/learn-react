
import Hero from './component/Hero';

  const App=()=>{ 

    const deta={
      name:"sovon",
      age:24,
      des:"i am a web developer"
    }
  return (

    <div>
      <Hero item={deta}/>
    </div>

  );
  };


export default App;