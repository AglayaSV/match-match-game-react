import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import registerServiceWorker from './registerServiceWorker';
import GameRouting from './components/presentational/GameRouting';
import rootReducer from './reducers/';
import middlewares from './middlewares/';

import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer, {}, middlewares);

ReactDOM.render(
    <Provider store={store}>
        <GameRouting/>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
