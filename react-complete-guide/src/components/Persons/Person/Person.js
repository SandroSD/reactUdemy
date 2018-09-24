import React, {Component} from 'react';
//import Radium from 'radium';
import classes from './Person.css';

class Person extends Component{
    /*const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }*/
    /*const rnd = Math.random();
    if(rnd>0.7){
        throw new Error("Hubo un error!");
    }*/
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
      }
    render(){
        console.log('[Person.js] Inside render()');
        return (            
            <div className={classes.Person} /*style={style}*/>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}
//export default Radium(person);
export default Person;