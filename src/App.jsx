
import Hero from './component/Hero';
const App=()=>{ 

const postFrom=(event)=>{
event.preventDefault();
alert("form submitted");
}
 

  return (

    <div>
      <form onSubmit={postFrom}>
        <input type="text" placeholder='name' />
        <button type="submit">submit</button>
      </form>
    </div>

  );
  };


export default App;