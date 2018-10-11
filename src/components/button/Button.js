import React from 'react';

const ButtonStyling = {
    backgroundColor: 'blue',
    padding: '1em'
}

const Button = props => {
    return (
        <button
            type="button"
            style={ButtonStyling}
            className={`btn btn-${props.type ? props.type : 'default'}`}
            onClick={props.onButtonClick}>
            {props.label}
        </button>
    )
}

export default Button;