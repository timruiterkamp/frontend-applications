import React, { Component } from 'react'; 
import Button from '../components/button/Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count : 0};
    this.incrementCount = this.incrementCount.bind(this);
}

incrementCount() {
    this.setState({
        count: this.state.count + 1
    });
}

  render() {
    return (
      <div>
        <Button type={'error'} onButtonClick={this.incrementCount} label={this.state.count}/>
      </div>
    );
  }
}

export default App;
