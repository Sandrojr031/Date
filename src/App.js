import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
  }
  calculate(event) {
    
   // const target = event.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    //const name = target.name;
      
      function sub(data1, data2){
        return data1 - data2;
      }
      this.calculate.setstate(data1)
      //alert(data1);
      //return("data1");
      //return("data2");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">To get sandro, edit
           <code> src/App.js</code> and save to reload.
           </p>
           <div>
           <input 
            type="date"
            //name
            name="edgar"
            value={this.props.data1}/>
           </div>
           <input 
            type="date"
            //name 
            name="ragnarok"
            value={this.props.data2}/>
            <div>
            <button onClick={this.calculate}>
              Calculate
            </button>
            </div>
      </div>
    );
  }
}

export default App;
