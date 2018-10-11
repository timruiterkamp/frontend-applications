import React from 'react';

const LabelStyling = {
    backgroundColor: 'blue',
    padding: '1em'
}

const Label = props => {
    return (
        <label
            type="label"
            style={LabelStyling}
            className={`label label-${props.type ? props.type : 'default'}`}
            onClick={props.onButtonClick}>
            {props.label}
        </label>
    )
}

export default Label;