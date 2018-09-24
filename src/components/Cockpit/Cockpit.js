import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Cockpit.css';
const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = classes.Button;
    if(props.showPersons){
        btnClass = [classes.Button,classes.Red].join(' ');
    }
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
     return (
       <Aux>
         <div className={classes.Cockpit}>
        <h1 className={assignedClasses.join( ' ' )} >Welcome to the React App!!</h1>
        <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
        </Aux>
     );
};
export default cockpit;