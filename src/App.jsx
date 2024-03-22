import React , {Component} from "react";
// import Scorekeeper from "./scorekeeper";
import './App.css';
import Allballs from "./allballs";
class App extends Component{
  render(){
      return(
        <div className="App">
          <Allballs/>
          <Allballs title="Mini-Daily" maxNum={10} maxBalls={4}/>
        </div>
      );
    
  }
}

export default App;
