import React from 'react'
import { Auth } from '../components/Auth'
import { withRouter } from 'react-router-dom'

export const LogoutButton = withRouter(
	({ history }) =>
		Auth.isAuthenticated ? (
			<p>
				Welcome!{' '}
				<button
					onClick={() => {
						Auth.signout(() => history.push('/'))
					}}
				>
					Sign out
				</button>
			</p>
		) : (
			<p>You are not logged in.</p>
		)
)
