import React from 'react';
import shirt_1 from '../../images/shirt_1.png';
import shirt_2 from '../../images/shirt_2.png';
import shirt_3 from '../../images/shirt_3.png';
import {Field, reduxForm} from "redux-form";
import {history} from '../presentational/GameRouting';
import {connect} from 'react-redux';
import {DIFFICULTY_HARD, DIFFICULTY_EASY, DIFFICULTY_MEDIUM} from '../../constants/';

let FormComponent = props => {

    const onSubmitForm = (data) => {
        props.onSubmit(data);
        props.initGame(data.difficulty, data.shirt);
        props.startTimer();
        history.push("/game");
    };

    const onResetForm = () => {
        props.onReset();
        props.reset();
    };

    return (
        <form id="registrationForm" onSubmit={props.handleSubmit(onSubmitForm)}>
            <div>
                <label htmlFor="name">First Name:*</label>
                <Field name="name" minLength="3" component="input" type="text" required/>
            </div>
            <div>
                <label htmlFor="email">Email:*</label>
                <Field name="email" component="input" type="email" required/>
            </div>
            <div className="shirt-img">
                <label>Choose a shirt:</label>
                <Field name="shirt" component="input" type="radio" value="0"/>
                <img src={shirt_1}/>
                <Field name="shirt" component="input" type="radio" value="1"/>
                <img src={shirt_2}/>
                <Field name="shirt" component="input" type="radio" value="2"/>
                <img src={shirt_3}/>
            </div>
            <div className="difficulty">
                <p>Choose difficulty:</p>
                <label>
                    <Field name="difficulty" component="input" type="radio" id="easy" value={DIFFICULTY_EASY}/>
                    easy
                </label>
                <label>
                    <Field name="difficulty" component="input" type="radio" id="medium" value={DIFFICULTY_MEDIUM}/>
                    medium
                </label>
                <label>
                    <Field name="difficulty" component="input" type="radio" id="hard" value={DIFFICULTY_HARD}/>
                    hard
                </label>
            </div>
            <div className="button-panel">
                <button className="button button-small" type="submit" value="START">START</button>
                <button className="button button-small" type="button" onClick={onResetForm} value="RESET">RESET</button>
            </div>
        </form>
    );
};

FormComponent = reduxForm({
    form: 'profile',
    enableReinitialize: true
})(FormComponent);

FormComponent = connect(
    state => ({
        initialValues: state.profile // pull initial values from account reducer
    })
)(FormComponent);

export default FormComponent;