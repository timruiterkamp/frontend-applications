import React, {Component} from 'react';
export default class Client extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            loading: true, 
            client: {} 
        }
    }

    async componentDidMount() {
    let response = await fetch(`http://localhost:1337/clients/${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
        loading: false,
        client: data
    })
    }

    render() {
    if (!this.state.loading) {
        return (
        <div className="client">
            <div className="client__information">
                <h2 className="client-title">{this.state.client.name}</h2>
            </div>
            <div className="client__description">
            {this.state.client.description}
            </div>
        </div>
        );
    }

    return (<h2>Waiting for API...</h2>);
    }
}