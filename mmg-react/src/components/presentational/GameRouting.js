import React from "react";
import {Router, Route} from "react-router-dom";
import Start from './Start';
import PlayerProfile from "../containers/PlayerProfile";
import GameField from '../containers/GameField';
import EndOfGame from '../containers/EndOfGame';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

const GameRouter = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={Start}/>
            <Route path="/profile" component={PlayerProfile}/>
            <Route path="/game" component={GameField}/>
            <Route path="/end" component={EndOfGame}/>
        </div>
    </Router>);

export default GameRouter;