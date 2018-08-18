import {shuffle} from '../utilites/';
import Card from '../model/Card';
import {delay} from '../utilites';
import {history} from "../components/presentational/GameRouting";
import {
    DELAY_BEFORE_DISCOVER_CARDS,
    DELAY_BEFORE_CLEAR_CSS_AFTER_ROTATE_BACK,
    DELAY_BEFORE_CLEAR_CSS_BEFORE_ROTATE_BACK,
    DELAY_BEFORE_ROTATE_BACK,
    DELAY_BEFORE_VIEW_RESULTS
} from '../constants/';

export const FILL_CARDS_STATE = 'FILL_CARDS_STATE';
export const FLIP_CARD = 'FLIP_CARD';
export const CLEAR_GAME_FIELD = 'CLEAR_GAME_FIELD';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const INIT_GAME_PLAY = 'INIT_GAME_PLAY';
export const CLEAR_CSS_CLASSES = 'DELETE_CSS_CLASS';
export const ROTATE_CARDS_BACK = 'ROTATE_CARDS_BACK';
export const DISAPPEAR_CARDS = 'DISAPPEAR_CARDS';
export const BLOCK_ONCLICK = 'BLOCK_ONCLICK';
export const ADD_CARD_TO_DISCOVERED_CARDS = 'ADD_CARD_TO_DISCOVERED_CARDS';
export const CLEAR_DISCOVERED_ARRAY = 'CLEAR_DISCOVERED_ARRAY';
export const TICK = 'TICK';


export const restartGame = () => {
    return (dispatch, getState) => {
        dispatch(initGame(getState().profile.difficulty, getState().profile.shirt))
    }
};

let st;
export const startTimer = () => {

    return (dispatch) => {
        st = setInterval(() => {
            dispatch(tick())
        }, 1000);
    };
};

export const stopTimer = () => {
    return clearInterval(st);
};

const tick = () => {
    return {
        type: TICK
    }
};

const clearDiscoveredArray = () => {
    return {
        type: CLEAR_DISCOVERED_ARRAY
    }
};

const clearCssClasses = (index) => {
    return {
        type: CLEAR_CSS_CLASSES,
        index
    }
};

const rotateCardsBack = (index1, index2) => {
    return {
        type: ROTATE_CARDS_BACK,
        index1,
        index2
    }
};

const disappearCards = (index1, index2) => {
    return {
        type: DISAPPEAR_CARDS,
        index1,
        index2
    }
};

const blockOnclick = (trigger) => {
    return {
        type: BLOCK_ONCLICK,
        trigger
    }
};

const addCardsToDiscoveredCards = (arrayIndex, imageIndex) => {
    return {
        type: ADD_CARD_TO_DISCOVERED_CARDS,
        card: {
            arrayIndex,
            imageIndex
        }
    }
};

const prepareCardArray = (difficulty, shirt) =>
    Array.from({length: difficulty}, (e, i) => new Card(i % (difficulty / 2), false, false, '', shirt));

const fillCardsState = (difficulty, shirt) => {
    return {
        type: FILL_CARDS_STATE,
        cards: shuffle(prepareCardArray(difficulty, shirt))
    }
};

export const flipCard = (index, imageIndex) => {
    return (dispatch, getState) => {

        let discoveredArray = getState().game.gamePlay.discoveredCards;

        if (discoveredArray.length < 2) {
            dispatch(addCardsToDiscoveredCards(index, imageIndex));
            dispatch({type: FLIP_CARD, index});
        }

        discoveredArray = getState().game.gamePlay.discoveredCards;

        if (discoveredArray.length === 2) {
            dispatch(blockOnclick(true));
            delay(DELAY_BEFORE_DISCOVER_CARDS).then(() => {
                if (discoveredArray[0]['imageIndex'] === discoveredArray[1]['imageIndex']) {

                    dispatch(disappearCards(discoveredArray[0]['arrayIndex'], discoveredArray[1]['arrayIndex']));
                    dispatch(clearDiscoveredArray());
                    dispatch(decreaseCounter());

                    if (getState().game.gamePlay.counter === 0) {
                        delay(DELAY_BEFORE_VIEW_RESULTS).then(() => {
                            history.push("/end");
                        });
                    }
                    dispatch(blockOnclick(false));
                } else {
                    delay(DELAY_BEFORE_CLEAR_CSS_BEFORE_ROTATE_BACK).then(() => {
                        dispatch(clearCssClasses(discoveredArray[0]['arrayIndex']));
                        dispatch(clearCssClasses(discoveredArray[1]['arrayIndex']));
                    });
                    delay(DELAY_BEFORE_ROTATE_BACK).then(() => {
                        dispatch(rotateCardsBack(discoveredArray[0]['arrayIndex'], discoveredArray[1]['arrayIndex']));
                    });
                    delay(DELAY_BEFORE_CLEAR_CSS_AFTER_ROTATE_BACK).then(() => {
                        dispatch(clearCssClasses(discoveredArray[0]['arrayIndex']));
                        dispatch(clearCssClasses(discoveredArray[1]['arrayIndex']));
                    });
                    dispatch(clearDiscoveredArray());
                    dispatch(blockOnclick(false));
                }
            });
        }
    }
};

export const clearGameField = () => {
    return {
        type: CLEAR_GAME_FIELD
    }
};

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER
    }
};

const initGamePlay = (difficulty) => {
    return {
        type: INIT_GAME_PLAY,
        difficulty
    }
};

export const initGame = (difficulty, shirt) => {
    return (dispatch) => {
        dispatch(clearGameField());
        dispatch(initGamePlay(difficulty));
        dispatch(fillCardsState(difficulty, shirt));
    }
};