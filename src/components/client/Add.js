import React, {Component} from 'react';
import {Button} from '../button/Button';

export default class AddUser extends Component{
    constructor(props) {
        super(props);

        this.state ={
            loading: true,
            clients: []
        }
    }
    
    submitInformation = () => {

        const data = {
            name: document.querySelector('#name').value,
            age: document.querySelector('#age').value
        }
        
        console.log(data);

        fetch('http://localhost:1337/clients', {
            method: 'post',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: `name=${data.name}&age=${data.age}`
        }).then((res) => {
            if (res.status !== 200) return;
            res.json().then((data) => console.log(data));
        }).catch((err) => console.log('Fetch Error :-S', err));
    };

    render() {
        
        return (
            <article className={'client-add'}>
                <input type={"text"} id={'name'} />
                <input type={"number"} id={'age'}/>
                <input type={'submit'} value={'submit'} onClick={this.submitInformation.bind(this)}/>
                {/* <Button 
                type={'add'} 
                onButtonClick={this.submitInformation.bind(this)}
                label={'Voeg gebruiker toe'} /> */}
            </article>
        )
    }
}