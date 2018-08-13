import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      { name: 'pallavi', age: 24 },
      { name: 'sonam', age: 28 }  
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: 'pallavi', age: 24 },
      { name: newName, age: 28 }  
    ]});
  }
  render() {
   return (
      <div className="App">
      <h1>Hi!I am a react app</h1>
      <button onClick={this.switchNameHandler.bind(this,'hello')}>Switch</button>
      <Person click={this.switchNameHandler.bind(this,'hello')} name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies is dancing</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies is dancing</Person>
      </div>
   );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
  }
}

export default App;
