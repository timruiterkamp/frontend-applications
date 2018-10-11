import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {

        console.log('home',this.props);

        return (
            <header className="App-header">
                <nav>
                    <ul>
                        {this.props.link.map(page => (
                            <NavLink to={page.path} key={page.id}>{page.name}</NavLink>  
                        ))}
                    </ul>
                </nav>
            </header>
        )
    }
}

