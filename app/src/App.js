import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'react-rainbow-components';

class App extends React.Component {
  state = {
    date: new Date(),
  }

  render(){
    return (
      <div className="App">
        <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <DatePicker
                value={this.state.date}
                label="DatePicker Label"
                onChange={ value => this.setState({ date: value }) } 
            />
        </div>
      </div>
    );

  }
}

export default App;
