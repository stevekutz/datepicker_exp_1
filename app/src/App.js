import React from 'react';

import { DatePicker , Card } from 'react-rainbow-components';
import DatePicker_1 from './comp/DatePIcker_1';

class App extends React.Component {
  state = {
    date: new Date(),
    date_1: new Date('October 31, 2010 03:24:00'),
  }

  render(){
    return (
      
        <Card style = {{width: `50%`}} center>
          <DatePicker_1 />
        </Card>

    );

  }
}

export default App;
