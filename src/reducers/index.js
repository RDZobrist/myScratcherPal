import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ScratcherFormReducer from './scratcherFormReducer';
import ScratcherReducer from './scratcherReducer'
export default combineReducers({
   auth: AuthReducer,
   scratcherForm: ScratcherFormReducer,
   scratchers: ScratcherReducer
});

