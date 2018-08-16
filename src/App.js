import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {id:1, name: 'pallavi', age: 24 },
      {id:2 ,name: 'sonam', age: 28 }  
    ],
    otherState : 'some other state',
    showPersons: false
  }

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex( p => {
          return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () =>{
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
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
      return <Person click={() => this.deletePersonHandler(index)}  key={person.id} name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)}>My hobbies is dancing</Person>
        })}
      </div>
      );
      style.backgroundColor = 'red';
    
    }

      let classes = [];
      if(this.state.persons.length <=2){
        classes.push('red');
      }
      if(this.state.persons.length <=1){
        classes.push('bold');
      }


   return (
      <div className="App">
      <h1 className={classes.join('')} >Welcome to the React App!!</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
   );
  }
}

export default Radium(App);
