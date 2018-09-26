import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <label className='col-12 text-light border-bottom'>
            <h1>Change Calculator</h1>
          </label> 
            <div className='col-4'>Due</div>
            <div className='col-4'>Received</div>
            <div className='col-4'>BTN</div>
        <div className='col-8'>
        
          <div className='row col-12 well well-sm'>myrowcol12</div>
          <div className='row col-3'>myrowcol3</div>
          <div className='row col-3'>number2</div>
        </div>
       </div> 
      </div>
    );
  }
}

export default App;
