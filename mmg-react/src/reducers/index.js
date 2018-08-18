import {combineReducers} from 'redux';
import game from './game';
import profile from './profile';
import results from './results';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({game, profile, results, form: formReducer});

export default rootReducer;