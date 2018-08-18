import React from 'react';
import {Link} from "react-router-dom";

const Start = () => (
    <div className="greeting wrapper">
        <h1>match-match game</h1>
        <Link to="/profile">
            <button className="button button-small">play!</button>
        </Link>
    </div>
);

export default Start;