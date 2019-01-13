import * as actionTypes from './actionTypes';

//Action Creators for Redux     //Son útiles para sync code, pero mas útiles para async code

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(()=>{    //HTTP request, en vez del settimeout
            // const oldCounter = getState().ctr.counter;
            // console.log("OldCounter", oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (res) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: res
    }
};