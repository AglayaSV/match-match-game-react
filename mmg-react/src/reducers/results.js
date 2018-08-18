import {PREPARE_RESULTS_TO_STATE, ERROR_API_RESULT, CLEAR_PREPARED_ARRAY} from '../actions/results';

const results = (state = {apiError: '', preparedArray: []}, action) => {
    switch (action.type) {
        case 'PREPARE_RESULTS_TO_STATE':
            return {...state, preparedArray: action.preparedArray};
        case 'ERROR_API_RESULT':
            return {...state, apiError: action.textError};
        case 'CLEAR_PREPARED_ARRAY':
            return {...state, preparedArray: []};
        default:
            return state;
    }
};

export default results;