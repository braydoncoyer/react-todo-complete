import React from 'react';
import './button.css';

const Button = ({onButtonClick, buttonText}) => {
    return (
        <div className="button__container" onClick={onButtonClick}>
            <div className="button__container-text">
                {buttonText}
            </div>
        </div>
    )
};

export default Button;
