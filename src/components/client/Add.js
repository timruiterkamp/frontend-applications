import React, {Component} from 'react';

export default class AddUser extends Component{
    constructor(props) {
        super(props);

        this.state ={
            loading: true,
            clients: [],
            percentage: 0
        }
    }
    
    submitInformation = () => {

        const data = {
            name: document.querySelector('#name').value,
            age: document.querySelector('#age').value
        }
      
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
                <h3>Voeg een nieuwe case toe</h3>
                <form>
                    <input type={"text"} id={'name'} placeholder={'Naam'}/>
                    <input type={"number"} id={'age'} placeholder={'Leeftijd'}/>
                    <input type={'submit'} value={'submit'} onClick={this.submitInformation.bind(this)}/>
                </form>
            </article>
        )
    }
}