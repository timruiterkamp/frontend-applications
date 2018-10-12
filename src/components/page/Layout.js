import React, {Component} from 'react'
import RouterNav from '../../routes'
import {Footer} from './Footer'

class Layout extends Component {
    render() {
        return (
            <>
                <RouterNav />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Layout
