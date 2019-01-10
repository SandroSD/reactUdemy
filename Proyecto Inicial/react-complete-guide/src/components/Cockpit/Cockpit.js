import React from 'react';
import classes from './Cockpit.css'


const Cockpit = (props) => {
    
    const assignedClasses = [];    
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); //añade al array la clase red.
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold); //añade al array la clase bold y ya tiene red.
    }
    //join(' '), junta todos los elementos del array desde donde se los llame y los transforma a un string separados por el parámetro, en nuestro caso separado por un espacio.

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <h2>{props.appTitle}</h2>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                //style={style}
                className = {btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;