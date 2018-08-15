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

  // nameChangedHandler = (event) => {
  //   this.setState({persons: [
  //     { name: 'pallavi', age: 24 },
  //     { name: event.target.value, age: 28 }
  //   ]});
  // }

  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons});
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
        {
          this.state.persons.map((person, index) => {
      return <Person click={() => this.deletePersonHandler(index)}  key={person.name} name={person.name} age={person.age}>My hobbies is dancing</Person>
        })}
      </div>
      );
    }

   return (
      <div className="App">
      <h1>Welcome to the React App!!</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
   );
  }
}

export default App;
