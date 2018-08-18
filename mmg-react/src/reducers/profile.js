import {ADD_PROFILE, RESET_PROFILE} from '../actions/profile';
import {DIFFICULTY_MEDIUM} from "../constants/";

const profile = (state = {shirt: "1", difficulty: DIFFICULTY_MEDIUM}, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return Object.assign({}, state, action.profileObject);
        case RESET_PROFILE:
            return {shirt: "1", difficulty: DIFFICULTY_MEDIUM};
        default:
            return state;
    }
};

export default profile;