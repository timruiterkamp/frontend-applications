import React from 'react'

export const Card = props => (
    <article className={`card card-${props.type ? props.type : 'default'}`}>
        {props.image && <img src={props.image} alt={props.title} />}
        <h3 className={'card-title'}>{props.title}</h3>
        <p className={'card-description'}>{props.description}</p>
    </article>
)
