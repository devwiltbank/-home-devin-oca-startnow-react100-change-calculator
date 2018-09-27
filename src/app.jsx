import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
    };
    this.handleClick   = this.handleClick.bind(this);
    this.handleChange  = this.handleChange.bind(this);
  }
     
    handleChange(e) {
      console.log('calc initiated');
      var due             = parseInt(this.state.amountDue) * 100; 
      var recd            = parseInt(this.state.amountReceived) * 100;
      var totalMoneyDue   = (recd - due) // keep in pennies
      var wholeDollars    = Math.floor(totalMoneyDue / 100) * 100 // keep in pennies
      var changeOnlyDue   = (totalMoneyDue - wholeDollars);   // in pennies
      var quarters        = Math.floor(changeOnlyDue / 25);
          changeOnlyDue  -= quarters * 25;    
      var dimes           = Math.floor(changeOnlyDue / 10);
          changeOnlyDue  -= dimes * 10;
      var nickels         = Math.floor(changeOnlyDue / 5);         
          changeOnlyDue  -= nickels * 5;
      var pennies         = Math.floor(changeOnlyDue / 1);        
          changeOnlyDue  -= pennies * 1;
      
      this.setState = {
        amountDue: due,
        amountReceived: recd,
        changeDue: totalMoneyDue,
        twenties: '',
        tens: '',
        fives: '',
        ones: '',
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies,
      }
      
      console.log(due)    
    
    }
    //Code below can be used to make a function instead of using the arrow function on the inputs    
    //this.setState({ [event.target.name] : +event.target.value });
    
    handleClick(e) {
        e.preventDefault();
        console.log('button clicked')
        this.handleChange();
    }    

    render() {
    return (
      <div className='container-fluid'>
          <div className='light border-bottom text-light mb-4'>
            <h1>Change Calculator</h1>
          </div> 
        
        <div className='row'>
        <div className='col-sm-4'>
            <div className='card'>
              <h6 className='card-header text-secondary'>Enter Information</h6>
              <div className='card-body'>
                <div className='card-text'>
                  <h6 htmlFor='amount-due'>How much is due?</h6>
                </div>
                <div className='card-text'>
                  <input
                    className='w-100'
                    name='amountDue'
                    value={ this.state.amountDue }
                    onChange={e => this.setState({ amountDue: e.target.value})}
                  />
                </div>
                <div className='card-text mt-2'>
                  <h6 htmlFor='amount-received'>How much is received?</h6>
                </div>
                <div className='card-text'>
                  <input
                    className='w-100'
                    name='amountReceived'
                    value={ this.state.amountReceived }
                    onChange={e => this.setState({ amountReceived: e.target.value})}
                  />
                </div>
              </div>
              <div className='card-footer'>
                <button
                  className='button btn btn-primary text-white w-100'
                  name='submit'
                  onClick={ this.handleClick }
                >
                Calculate
                </button>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='card'>
              <div
                className='alert alert-success text-center m-3'
                role='alert'
                name='changeDue'
                value={ this.state.changeDue }
              >
                The total change due is ${this.state.changeDue}
              </div>
              <div className='container'>
                <div className='row mb-3'>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Twenties</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='twenties'
                          value={ this.state.twenties }
                        >
                          {this.state.twenties}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Tens</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='tens'
                          value={ this.state.tens }
                        >
                          {this.state.tens}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Fives</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='fives'
                          value={ this.state.fives }
                        >
                          {this.state.fives}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Ones</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='ones'
                          value={ this.state.ones }
                        >
                          {this.state.ones}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container mb-3'>
                <div className='row'>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Quarters</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='quarters'
                          value={ this.state.quarters }
                        >
                          {this.state.quarters}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Dimes</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='dimes'
                          value={ this.state.dimes }
                        >
                          {this.state.dimes}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Nickels</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='nickels'
                          value={ this.state.nickels }
                        >
                          {this.state.nickels}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm'>
                    <div className='card'>
                      <div className='card-header'>
                        <p className='card-title text-center font-weight-bold'>Pennies</p>
                        <p
                          className='change card-subtitle mt-2 text-muted text-center'
                          name='pennies'
                          value={ this.state.pennies }
                        >
                          {this.state.pennies}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          



        </div>
      </div>
    );
  }
}

export default App;
