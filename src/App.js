import "./styles.css";
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 42
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Nicolas Marquez Counter: {this.state.counter}</h1>
        <button 
        onClick={()=>{
          this.setState((state,props)=>({counter: state.counter+1}))
        }
        }>Click me</button>
        <button 
        onClick={()=>{
          this.setState({counter: 0});
        }
        }>Reset counter</button>
      </div>
    );
  }
}
