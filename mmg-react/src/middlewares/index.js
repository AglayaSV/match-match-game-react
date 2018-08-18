import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {applyMiddleware, compose} from 'redux';

const middlewares = compose(
    applyMiddleware(
        logger,
        thunk
    )
);

export default middlewares;