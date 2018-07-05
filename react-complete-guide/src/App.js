import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28, id: 'ertf12' },
      { name: "Manu", age: 25, id: '123ert' },
      { name: "Stefy", age: 21, id: 'qweft6' }
    ],
    otherState: "Some other value",
    showPersons: false
  }  //props are set and passed from outside. managed from inside the component.
  //switchNameHandler = (newName) =>{
    //console.log("Was Clicked!");
    /** this solo funcionará si usamos la sintaxis de ES6 */
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    /*this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 25 },
        { name: "Stefy", age: 41 }
      ]
     }); //react provee este metodo.
  }*/
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    

    //const person = Object.assign({}, this.state.persons[personIndex]);

    this.setState({
      persons: persons
    });
  }

    deletePersonHandler = (personIndex) =>{
      //const persons = this.state.persons.splice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}          
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //añade al array la clase red.
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //añade al array la clase bold y ya tiene red.
    }
    //join(' '), junta todos los elementos del array desde donde se los llame y los transforma a un string separados por el parámetro, en nuestro caso separado por un espacio.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>      
    );

    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default Radium(App);