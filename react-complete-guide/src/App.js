import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 25 },
      { name: "Stefy", age: 21 }
    ],
    otherState: "Some other value"
  }  //props are set and passed from outside. managed from inside the component.
  switchNameHandler = (newName) =>{
    //console.log("Was Clicked!");
    /** this solo funcionará si usamos la sintaxis de ES6 */
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 25 },
        { name: "Stefy", age: 41 }
      ]
     }); //react provee este metodo.
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: "Stefy", age: 41 }
      ]
     });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
        <Person
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Maxx!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
      </div>      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
