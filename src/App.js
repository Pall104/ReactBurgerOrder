import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      { name: 'pallavi', age: 24 },
      { name: 'sonam', age: 28 }  
    ],
    otherState : 'some other state',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: 'pallavi', age: 24 },
      { name: newName, age: 28 }  
    ]});
  }
  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'pallavi', age: 24 },
      { name: event.target.value, age: 28 }  
    ]});
  }

  togglePersonsHandler = () =>{
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
<div>
      <Person click={this.switchNameHandler.bind(this,'hello')} name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies is dancing</Person>
      <Person name={this.state.persons[1].name} changed={this.nameChangedHandler} age={this.state.persons[1].age}>My hobbies is dancing</Person>
      </div>
      );
    }
   return (
      <div className="App">
      <h1>Hi!I am a react app</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
   );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
  }
}

export default App;
