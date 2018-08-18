import React from 'react';
import PropTypes from "prop-types";
import Timer from "../presentational/Timer";
import CardList from "../presentational/CardList";
import ControlPanel from "../presentational/ControlPanel";
import {connect} from 'react-redux';
import {flipCard, restartGame, stopTimer} from '../../actions/game';
import {bindActionCreators} from 'redux';


const {Fragment} = React;
const {Component} = React;


class GameField extends Component {

    componentWillUnmount() {
        stopTimer();
    }

    render() {
        let time = `TIME ${Math.floor(this.props.timer / 60)} min : ${this.props.timer % 60} sec`;
        return (
            <Fragment>
                <Timer time={time}/>
                <CardList
                    gameField={this.props.gameField}
                    flipCard={this.props.cardFlip}
                    blockedCard={this.props.blockedCard}
                />
                <ControlPanel
                    restartGame={this.props.restartGame}
                />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameField: state.game.gameField,
        blockedCard: state.game.gamePlay.blockedCard,
        timer: state.game.gamePlay.timer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardFlip: bindActionCreators(flipCard, dispatch),
        restartGame: bindActionCreators(restartGame, dispatch)
    }
}

GameField.propTypes = {
    gameField: PropTypes.array.isRequired,
    blockedCard: PropTypes.bool.isRequired,
    timer: PropTypes.number.isRequired,
    cardFlip: PropTypes.func.isRequired,
    restartGame: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);