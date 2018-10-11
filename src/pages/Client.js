import React from 'react';

export const Client = ({ match }) => (
    <div>
        <h2> title</h2>
        <h3>ID: {match.params.id}</h3>
    </div>
);
