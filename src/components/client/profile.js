import React from 'react'

export const Profile = props => (
	<article className="profile">
		<section className={'profile-content'}>
			<div className={'profile-meta'}>
				<img
					className={'profile-image'}
					src="https://cdn.dribbble.com/users/2091236/screenshots/4845220/happy_child.png"
					alt="https://cdn.dribbble.com/users/2091236/screenshots/4845220/happy_child.png"
				/>
				<h3 className={'profile-name'}>{props.name}</h3>
				<p className={'profile-age'}>{props.age} jaar oud</p>
			</div>
			<div className={'profile-description'}>
				<p>{props.description}</p>
			</div>
		</section>
		<section className={'profile-calc'}>
			<h3>{props.calc}</h3>
		</section>
	</article>
)
