import React from 'react';
import { DatePicker , Card } from 'react-rainbow-components';

class DatePicker_1 extends React.Component {
  state = {
    date: new Date(),
    date_1: new Date('October 31, 2010 03:24:00'),
  }

  render(){
    return (
  
        <Card style = {{width: `50%`}} center>

                <DatePicker isCentered formatStyle = 'small'
                    minDate = {new Date('October 31, 2017 03:24:00')}
                    maxDate = {new Date('October 9, 2025 03:24:00')}
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

export default DatePicker_1;
