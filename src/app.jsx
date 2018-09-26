import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
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
                    // onChange={ this.handleChange }
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
                    // onChange={ this.handleChange }
                  />
                </div>
              </div>
              <div className='card-footer'>
                <button
                  className='button btn btn-primary text-white w-100'
                  name='submit'
                  //onClick={ this.handleSubmit }
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
                //value={ this.state.changeDue }
              >
                {/* The total change due is ${this.state.changeDue} */}
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
                          // value={ this.state.twenties }
                        >
                          {/* {this.state.twenties} */}
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
                          // value={ this.state.tens }
                        >
                          {/* {this.state.tens} */}
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
                          // value={ this.state.fives }
                        >
                          {/* {this.state.fives} */}
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
                          // value={ this.state.ones }
                        >
                          {/* {this.state.ones} */}
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
                          // value={ this.state.quarters }
                        >
                          {/* {this.state.quarters} */}
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
                          // value={ this.state.dimes }
                        >
                          {/* {this.state.dimes} */}
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
                          // value={ this.state.nickels }
                        >
                          {/* {this.state.nickels} */}
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
                          // value={ this.state.pennies }
                        >
                          {/* {this.state.pennies} */}
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
