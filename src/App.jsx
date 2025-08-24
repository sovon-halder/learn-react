

 
  const App=()=>{ 

 
  class car{
    constructor(name){
      this.brand=name;
    }
    present(){
      return 'I have a '+ this.brand;
    }
  }

  const mycar=new car("Ford");
  mycar.present();
  };


export default App;