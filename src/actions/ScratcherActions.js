import { 
    ADD_SCRATCHER_TO_LIST,
    SCRATCHERS_FETCH_SUCCESS,
    RECORD_OUTCOME_OF_SCRATCHER,
    AMOUNT_CHANGED,
    NAME_CHANGED
 } from "./types";
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase'




export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};

export const amountChanged = (text) => {
    return {
        type: AMOUNT_CHANGED,
        payload: text
    };
};


export const addScratcherToList = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) =>{
            firebase.database().ref(`/users/${currentUser.uid}/scratchers`)
            .push({name, amount})
            .then(() => {
                dispatch({type: ADD_SCRATCHER_TO_LIST });
                Actions.pop()
            });
    }
};


export const fetchScratchers = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/scratchers`)
        .on('value', snapshot => {
            dispatch({ type: SCRATCHERS_FETCH_SUCCESS, payload: snapshot.val() })
        });
    };
};

export const recordOutcome = ({name, amount, uid, quanityPurchased, runningTotal}) => {
    const { currentUser } = firebase.auth();
    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/scratchers/${uid}`)
        .set({quanityPurchased, runningTotal, name, amount})
        .then(() => {
            dispatch({type: RECORD_OUTCOME_OF_SCRATCHER})
        })
        .then(() => console.log('saved'))

    }
}