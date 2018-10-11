import React, { Component } from "react";
import { AddUser } from "../components/client/Add";
import { Card } from "../components/card/Card";

class App extends Component {
    constructor(props) {
        super(props);
        this.id = { id: null };
    }

    createUUID() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
        );
    }

    componentWillMount() {
        const id = this.createUUID();
        console.log(id);

        this.setState({
            id: id
        });
    }

    render() {
        return (
            <main>
                <h2>Hey!</h2>
                <AddUser type={"add"} userId={this.state.id} />
                <Card 
                title={'Niewe gebruiker'}
                description={'dit is een hele leuke knul'}/>
            </main>
        );
    }
}

export default App;
