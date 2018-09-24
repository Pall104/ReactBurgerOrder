import React ,{Component} from 'react';
import Person from './Person/Person';


class Persons extends Component{
    constructor(props){
        super(props);
      }
    render(){
        return this.props.persons.map((person, index) => {
            return  <Person click={() => this.props.clicked(index)} 
               name={person.name}
               age={person.age} 
               changed={(event) => this.props.changed(event, person.id)}>My hobbies is dancing
            </Person>
              });
    }

}
export default Persons;