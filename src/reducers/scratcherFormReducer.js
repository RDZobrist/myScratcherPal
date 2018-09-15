import {
    SCRATCHER_UPDATE,
    ADD_SCRATCHER_TO_LIST,
    RECORD_OUTCOME_OF_SCRATCHER
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    amount: '',
    buttonPressed: false,
    quanityPurchased: 0,
    runningTotal: 0,

};

export default ( state = INITIAL_STATE, action) => {
    switch (action.type){

        case SCRATCHER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value};
        case ADD_SCRATCHER_TO_LIST:
            return INITIAL_STATE;
        case RECORD_OUTCOME_OF_SCRATCHER:
            return {...state}
    

        default: 
            return state;
    }
}