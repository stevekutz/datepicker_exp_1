import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker , Card } from 'react-rainbow-components';

class App extends React.Component {
  state = {
    date: new Date(),
    date_1: new Date('October 31, 2010 03:24:00'),
  }

  render(){
    return (
  
        <Card style = {{width: `50%`}} center>
            <DatePicker
                value={this.state.date}
                label="DatePicker Label"
                onChange={ value => this.setState({ date: value }) } 
            />
            <DatePicker
                value={this.state.date_1}
                label="DatePicker Label"
                onChange={ value => this.setState({ date_1: value }) } 
            />
            <DatePicker
            value={this.state.date}
            label="DatePicker Label"
            onChange={ value => this.setState({ date: value }) } 
            />
        </Card>

    );

  }
}

export default App;
