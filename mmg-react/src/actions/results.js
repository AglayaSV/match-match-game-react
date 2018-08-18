import {COUNT_OF_RESULTS, RESULTS_URL, LOAD_ERROR, UPLOAD_ERROR} from '../constants/';
import 'whatwg-fetch';
import {getResGame} from '../utilites/';

export const PREPARE_RESULTS_TO_STATE = 'PREPARE_RESULTS_TO_STATE';
export const ERROR_API_RESULT = 'ERROR_API_RESULT';
export const CLEAR_PREPARED_ARRAY = 'CLEAR_PREPARED_ARRAY';

export const clearPreparedArray = () => {
    return {
        type: CLEAR_PREPARED_ARRAY
    }
};

export const saveAndGetResult = () => {
    return (dispatch, getState) => {
        let body = JSON.stringify({
            username: getState().profile.name,
            email: getState().profile.email,
            score: getResGame(getState().game.gamePlay.timer, getState().profile.difficulty)
        });
        fetch(RESULTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(response => {
                if (response.status === 200)
                    dispatch(getResultsFromServer())
            })
            .catch((e) => {
                console.error(UPLOAD_ERROR, e);
                dispatch(errorApiResult(UPLOAD_ERROR))
            })
    }
};

const errorApiResult = (textError) => {
    return {
        type: ERROR_API_RESULT,
        textError
    }
};

export const getResultsFromServer = () => {
    return (dispatch) => {
        fetch(RESULTS_URL)
            .then((response) => response.json() || [])
            .then((results) => {
                dispatch(prepareResultsToState(results['result'].sort((a, b) => b['score'] - a['score']).splice(0, COUNT_OF_RESULTS)))
            })
            .catch((e) => {
                console.error(LOAD_ERROR, e);
                dispatch(errorApiResult(LOAD_ERROR))
            });

    };
};

const prepareResultsToState = (preparedArray) => {
    return {
        type: PREPARE_RESULTS_TO_STATE,
        preparedArray
    }
};
