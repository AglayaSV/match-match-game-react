import React from 'react';
import {Link} from "react-router-dom";

const Congratulation = (props) => {

    const onClick = () => {
        props.restartGame();
        props.startTimer();
    };

   return( <div className="congratulation wrapper">
        <h1>congratulation!</h1>
        <h2>this game is yours</h2>
        <Link to="/game">
            <button className="button button-small new-game" onClick={onClick}>new game</button>
        </Link>
    </div>
   )
};

export default Congratulation;