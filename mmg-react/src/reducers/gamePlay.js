import {
    DECREASE_COUNTER,
    INIT_GAME_PLAY,
    BLOCK_ONCLICK,
    ADD_CARD_TO_DISCOVERED_CARDS,
    CLEAR_DISCOVERED_ARRAY,
    TICK
} from "../actions/game";

const gamePlay = (state = {}, action) => {
    switch (action.type) {
        case 'DECREASE_COUNTER':
            return {...state, counter: state.counter - 2};
        case 'INIT_GAME_PLAY':
            return {...state, counter: action.difficulty, blockedCard: false, discoveredCards: [], timer: 0};
        case 'BLOCK_ONCLICK':
            return {...state, blockedCard: action.trigger};
        case 'ADD_CARD_TO_DISCOVERED_CARDS':
            return {...state, discoveredCards: [...state.discoveredCards, action.card]};
        case 'CLEAR_DISCOVERED_ARRAY':
            return {...state, discoveredCards: []};
        case 'TICK':
            return {...state, timer: state.timer + 1};
        default:
            return state;
    }
};

export default gamePlay;