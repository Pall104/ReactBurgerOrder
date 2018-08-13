import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
   return (
      <div className="App">
      <h1>Hi!I am a react app</h1>
      <Person name="Pallavi" age="24"/>
      </div>
   );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
  }
}

export default App;
