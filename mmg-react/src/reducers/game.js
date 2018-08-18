import gameField from './gameField';
import gamePlay from './gamePlay';
import {combineReducers} from 'redux';

const gameReducer = combineReducers({gameField, gamePlay});

export default gameReducer;