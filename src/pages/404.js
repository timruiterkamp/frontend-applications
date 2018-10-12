import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../components/button/Button'

export const NotFound = () => (
    <div>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link to="/">
            <Button type="back" label="Ga terug" />
        </Link>
    </div>
)
