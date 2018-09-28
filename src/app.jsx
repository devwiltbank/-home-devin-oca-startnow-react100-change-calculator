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
    this.handleChange   = this.handleChange.bind(this);
    this.calculate      = this.calculate.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name] : +event.target.value
    });   
  }
  
  calculate() {
    var amountDue       = this.state.amountDue;
    var amountReceived  = this.state.amountReceived;
    var changeDue       = (amountReceived - amountDue) * 100;// in pennies
    var twenties        =''
    var tens            =''
    var fives           =''
    var ones            =''
    var quarters        =''
    var dimes           =''
    var nickels         =''
    var pennies         =''

    if(amountDue === amountReceived) {
      //this.setState({ changeDue : 0 })
      console.log('No change due');
    } else {
        if( amountDue > amountReceived ){
          //this.setState({ changeDue : 0})
          console.log("Danger! You didn't receive enough money.")
        } else {
                  changeDue   = Math.round(changeDue);
              var twenties    = Math.trunc(changeDue / 2000);
                  changeDue  -= twenties * 2000;
              var tens        = Math.trunc(changeDue / 1000);
                  changeDue  -= tens * 1000;
              var fives       = Math.trunc(changeDue / 500);
                  changeDue  -= fives * 500;
              var ones        = Math.trunc(changeDue / 100);
                  changeDue  -= ones * 100;
              var quarters    = Math.trunc(changeDue / 25);
                  changeDue  -= quarters * 25;    
              var dimes       = Math.trunc(changeDue / 10);
                  changeDue  -= dimes * 10;
              var nickels     = Math.trunc(changeDue / 5);         
                  changeDue  -= nickels * 5;
              var pennies     = changeDue;        
                  changeDue  -= pennies;
          }
      }
        this.setState({
          amountDue: amountDue,
          amountReceived: amountReceived,
          changeDue: amountReceived - amountDue,
          twenties: twenties,
          tens: tens,
          fives: fives,
          ones: ones,
          quarters: quarters,
          dimes: dimes,
          nickels: nickels,
          pennies: pennies,
        });    
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
                    // value={ this.state.amountDue }
                    onChange={ this.handleChange }
                  />
                </div>
                <div className='card-text mt-2'>
                  <h6 htmlFor='amount-received'>How much is received?</h6>
                </div>
                <div className='card-text'>
                  <input
                    className='w-100'
                    name='amountReceived'
                    // value={ this.state.amountReceived }
                    onChange={ this.handleChange }
                  />
                </div>
              </div>
              <div className='card-footer'>
                <button
                  className='button btn btn-primary text-white w-100'
                  id='calculateChange'
                  name='submit'
                  onClick={ this.calculate}
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
                The total change due is ${ this.state.changeDue }
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
