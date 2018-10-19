import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false
		}
	}

	render() {
		return (
			<header className="App-header">
				<nav>
					<ul>
						{this.props.link.map(page => (
							<NavLink
								exact
								activeClassName="nav-active"
								to={page.path}
								key={page.id}
							>
								{page.name}
							</NavLink>
							// <NavLink to={page.path} key={page.id} onClick={this.toggleActive.bind(this)} className={`navItem navItem-${this.state.active ? 'active' : 'default'}`}>{page.name}</NavLink>
						))}
					</ul>
				</nav>
			</header>
		)
	}
}
