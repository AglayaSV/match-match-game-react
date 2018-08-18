import React from 'react';
import PropTypes from "prop-types";
import Rules from '../presentational/Rules';
import Form from '../presentational/Form';
import {addProfile, resetProfile} from '../../actions/profile';
import {initGame, startTimer} from "../../actions/game";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const {Fragment} = React;
const {Component} = React;

class PlayerProfile extends Component {
    render() {
        return (
            <Fragment>
                <Rules/>
                <Form
                    onSubmit={this.props.addProfileToState}
                    onReset={this.props.resetProfileState}
                    initGame={this.props.initGameToState}
                    startTimer={this.props.startTimerToState}
                />
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProfileToState: bindActionCreators(addProfile, dispatch),
        resetProfileState: bindActionCreators(resetProfile, dispatch),
        initGameToState: bindActionCreators(initGame, dispatch),
        startTimerToState: bindActionCreators(startTimer, dispatch)
    }
}

PlayerProfile.propTypes = {
    addProfileToState: PropTypes.func.isRequired,
    resetProfileState: PropTypes.func.isRequired,
    initGameToState: PropTypes.func.isRequired,
    startTimerToState: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(PlayerProfile);