import React from 'react';
import ImageRes from '../../images/imageRes';

const imageRes = new ImageRes();
const backSides = imageRes.getBackSides();
const frontSides = imageRes.getFrontSides();

const CardListItem = (props) => {
        const onClickCard = () => {
            props.flipOnClick(props.index, props.imageIndex)
        };
        return (
            <li onClick={props.blockedCard ? undefined : onClickCard} className={props.cssClasses}>
                <img src={
                    props.flipped ? frontSides[props.imageIndex] : backSides[props.shirtIndex]
                } alt="card"/>
            </li>
        )
    }
;

export default CardListItem;