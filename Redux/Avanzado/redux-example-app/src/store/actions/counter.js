import * as actionTypes from './actionTypes';

//Action Creators for Redux     //Son útiles para sync code, pero mas útiles para async code

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
};