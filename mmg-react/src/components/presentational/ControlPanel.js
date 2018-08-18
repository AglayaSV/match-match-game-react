import React from 'react';
import {Link} from "react-router-dom";

const ControlPanel = (props) => (
    <div className="button-panel">
        <Link to="/profile">
            <button className="button backward-button button-small">&lt; Profile</button>
        </Link>
        <button className="button restart-button button-small" onClick={props.restartGame}>restart</button>
    </div>
);

export default ControlPanel;