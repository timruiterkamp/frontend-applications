import React from 'react'

export const Card = props => (
	<article className={`card card-${props.type ? props.type : 'default'}`}>
		{props.children}
	</article>
)
