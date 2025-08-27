
import Hero from './component/Hero';
const App=()=>{ 

const postFrom=(event)=>{
event.preventDefault();
}
 

  return (

    <div>
      <from onSubmit={postFrom}>
        <input type="text" placeholder='name' />
        <button type="submit">submit</button>
      </from>
    </div>

  );
  };


export default App;