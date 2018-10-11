import React from 'react';

export const Client = ({ match }, props) => (
    <div>
        <h2> title</h2>
        <h3>ID: {match.params.id}</h3>
        <h3>Name: {props.name}</h3>
    </div>
);
