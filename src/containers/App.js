import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state ={
      persons: [
        {id:1, name: 'pallavi', age: 24 },
        {id:2 ,name: 'sonam', age: 28 }  
      ],
      otherState : 'some other state',
      showPersons: false
    };
  
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
   
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
      <div>
        <Persons persons={this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
        />
      </div>
      );
    btnClass = classes.Red;
    }
   return (
      <div className={classes.App}>
      <button onClick={()=> {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
      {persons}
      </div>
   );
  }
}

export default App;
