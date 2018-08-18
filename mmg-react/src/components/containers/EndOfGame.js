import React from 'react';
import PropTypes from "prop-types";
import Congratulation from "../presentational/Congratulation";
import ResultsTable from "../presentational/ResultsTable";
import {saveAndGetResult} from '../../actions/results';
import {restartGame, startTimer} from '../../actions/game';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const {Fragment, Component} = React;

class EndOfGame extends Component {

    componentDidMount() {
        this.props.saveAndGetResultToState();
    }

    render() {
        return (
            <Fragment>
                <Congratulation
                    restartGame={this.props.restartGame}
                    startTimer={this.props.startTimer}
                />
                <ResultsTable
                    results={this.props.results}
                />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.results
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveAndGetResultToState: bindActionCreators(saveAndGetResult, dispatch),
        restartGame: bindActionCreators(restartGame, dispatch),
        startTimer: bindActionCreators(startTimer, dispatch)
    }
}

EndOfGame.propTypes = {
    saveAndGetResultToState: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    restartGame: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EndOfGame);