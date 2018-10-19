import React from 'react'
import { Link } from 'react-router-dom'

const ClientOverview = props => {
	const { clients } = props
	return (
		<>
			{clients ? (
				<h2>Aantal cases: {clients.length}</h2>
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
								<h3>{client.name}</h3>
								<p>
									<strong>Leeftijd:</strong> {client.age}
								</p>
								{client.korte_omschrijving ? (
									<p>
										<strong>Omschrijving:</strong>
										{client.korte_omschrijving}
									</p>
								) : (
									''
								)}
								<Link to={`/clienten/${client.id}`}>
									Bekijk profiel
								</Link>
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
