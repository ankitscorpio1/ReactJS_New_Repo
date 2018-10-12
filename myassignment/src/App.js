import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './UserInput';
import Output from './UserOutput';

class App extends Component {

  state = {
    outputs:{username :'Chauhan'}
};

  userNameHandler = (event) =>{

    this.setState({
      outputs:{username :event.target.value}
    })
  }

  render() {
    const style ={
      backgroundColor : 'white',
      font: 'inherit',
      border: '10x solid blue',
      padding: '20px'
    };
    

    return (
      <div className="App">
        <p style={style}>First React Assignment</p>
        <Input changed={this.userNameHandler} username={this.state.outputs.username} > </Input>
        <Output username={this.state.outputs.username} ></Output>
      </div>
    );
  }
}

export default App;
