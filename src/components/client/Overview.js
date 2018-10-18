import React from 'react'
import { Link } from 'react-router-dom'

const ClientOverview = props => {
	const { clients } = props
	return (
		<>
			{clients ? (
				<h2>Aantal clienten: {clients.length}</h2>
			) : (
				<h2>Loading</h2>
			)}
			<section className={'clientOverview'}>
				{clients &&
					clients.map((client, index) => {
						return (
							<article
								className="clientOverview__client"
								key={index}
							>
								<div className="clientOverview__clientInfomation">
									<Link to={`/clienten/${client.id}`}>
										<h3>{client.name}</h3>
									</Link>
								</div>
							</article>
							// TODO:
							// add update button
							// add question support
						)
					})}
			</section>
		</>
	)
}

export default ClientOverview
