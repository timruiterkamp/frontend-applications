import React, {Component} from 'react';
import {Button} from '../button/Button';
import {Link} from 'react-router-dom';

export default class ClientOverview extends Component {
    constructor(props) {
        super(props);

        this.state ={
            loading: true,
            clients: []
        }
    }

    async componentDidMount() {
        let response = await fetch('http://localhost:1337/clients');
        if (!response.ok) {
            console.log('error not found / cant connect')
            return
        }
        let clients = await response.json();
        this.setState({loading: false, clients: clients});
    }
    render() {
        if (!this.state.loading) {
            return (
                <>
                <h2>Aantal clienten: {this.state.clients.length}</h2>
                <article className="client">
                    {this.state.clients.map((client, index) => {
                        return (
                            <div className="clientInfomation" key={client.id}>
                                <Link to={`/clienten/${client.id}`}>
                                    <h3>{client.name}</h3>
                                </Link>
                            </div>

                            // TODO:
                            // add update button
                            // add question support
                        )
                    })}
                </article>
                </>
            )
        } else {
            return (
                <h2>Loading</h2>
            )
        }
    }

}