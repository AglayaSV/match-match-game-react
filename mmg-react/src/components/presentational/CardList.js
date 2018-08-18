import React from 'react';
import CardListItem from './CardListItem'

const CardList = (props) => {
    let classSizeGameField;
    switch (props.gameField.length) {
        case 12:
            classSizeGameField = "game-field-wrapper_easy";
            break;
        case 20:
            classSizeGameField = "game-field-wrapper_medium";
            break;
        case 32:
            classSizeGameField = "game-field-wrapper_hard";
            break;
        default:
            classSizeGameField = "game-field-wrapper_medium";
            break;
    }
    return (
        <div className={classSizeGameField}>
            <ul className="game-field">
                {props.gameField.map((item, i) => <CardListItem
                        key={i}
                        index={i}
                        imageIndex={item.imageIndex}
                        cssClasses={item.cssClasses}
                        discovered={item.discovered}
                        flipped={item.flipped}
                        shirtIndex={item.shirtIndex}
                        flipOnClick={props.flipCard}
                        blockedCard={props.blockedCard}
                    />
                )}
            </ul>
        </div>
    )
};

export default CardList;