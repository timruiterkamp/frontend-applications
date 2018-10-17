import React from 'react'

export const Profile = props => (
	<article className="profile">
		<h3 className={'profile-name'}>{props.name}</h3>
		<p className={'profile-age'}>{props.age}</p>
	</article>
)
