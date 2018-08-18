import {
    CLEAR_GAME_FIELD,
    FILL_CARDS_STATE,
    FLIP_CARD,
    CLEAR_CSS_CLASSES,
    ROTATE_CARDS_BACK,
    DISAPPEAR_CARDS
} from "../actions/game";

const gameField = (state = [], action) => {
    switch (action.type) {
        case FILL_CARDS_STATE:
            return Object.assign([], state, action.cards);
        case FLIP_CARD:
            return Object.assign([], state, {
                    [action.index]: {...state[action.index], flipped: true, cssClasses: 'rotationEffect'}
                }
            );
        case CLEAR_GAME_FIELD:
            return [];
        case CLEAR_CSS_CLASSES:
            return Object.assign([], state, {
                [action.index]: {...state[action.index], cssClasses: ''}
            });
        case ROTATE_CARDS_BACK:
            return Object.assign([], state, {
                [action.index1]: {...state[action.index1], flipped: false, cssClasses: 'rotationEffect'},
                [action.index2]: {...state[action.index2], flipped: false, cssClasses: 'rotationEffect'}
            });
        case DISAPPEAR_CARDS:
            return Object.assign([], state, {
                [action.index1]: {...state[action.index1], discovered: true, cssClasses: 'disappearance'},
                [action.index2]: {...state[action.index2], discovered: true, cssClasses: 'disappearance'}
            });
        default:
            return state;
    }
};

export default gameField;

