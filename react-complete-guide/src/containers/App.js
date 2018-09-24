import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { name: "Max", age: 28, id: 'ertf12' },
        { name: "Manu", age: 25, id: '123ert' },
        { name: "Stefy", age: 21, id: 'qweft6' }
      ],
      otherState: "Some other value",
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

    //props are set and passed from outside. managed from inside the component.
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
    console.log('[App.js] Inside render');
    const style = {
      /*backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',*/
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }*/
    };

    /* Con ErrorBoundary para el método MAP.
     * el atributo key, debe ir en el componente mas externo que abarca todo.
     * //<ErrorBoundary  key={person.id}>
     * //</ErrorBoundary>
     */
    let persons = null;
    if(this.state.showPersons){
      persons = (        
        <Persons persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangedHandler}
        />
      );
      //style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    
    return (
      //<StyleRoot>
        <div className={classes.App}>
          <Cockpit  
                    appTitle = {this.props.title}
                    showPersons = {this.state.showPersons}
                    persons = {this.state.persons}
                    clicked = {this.togglePersonsHandler}/>
          {persons}
        </div>
      //</StyleRoot>
      
    );

    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App/*Radium(App)*/; //higher order component.