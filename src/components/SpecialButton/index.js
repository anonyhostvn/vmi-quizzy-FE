import React from "react";
import {SpecialButtonWrapper} from './specialButton.wrapper';

const SpecialButton = ({text, hoverText, to}) => {
    return (
        <SpecialButtonWrapper>
            <a href={`${to}`} className="contact-button">
                {text}
                <svg className="icon icon-paperplane">
                    <use xlinkHref="#icon-paperplane"/>
                </svg>
                <span> {hoverText} </span>
            </a>
        </SpecialButtonWrapper>
    );
}

export default SpecialButton;