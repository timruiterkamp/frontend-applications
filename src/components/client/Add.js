import React from 'react';
import {Button} from '../button/Button';
import {Link} from 'react-router-dom';

export const AddUser = (props) => (
    <Link to={`clienten/${props.userId}`}>
        <article className={'client-add'}>
            <Button 
            type={'add'} 
            onButtonClick={props.addUser}
            label={'Voeg gebruiker toe'} />
        </article>
    </Link>
);