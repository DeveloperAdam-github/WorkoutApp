import React from 'react';

class Percentages extends React.Component {
  state = {
    yourmax: '',
    percentage: '',
    workingweight: ''
  };

  HandleYourMax = e => {
    this.setState({
      yourmax: e.target.value
    });
  };

  HandlePercentages = e => {
    this.setState({
      percentage: e.target.value
    });
  };

  HandleWorkingWeight = e => {
    this.setState({
      workingweight: e.target.value
    });
  };

  calcPercentage = e => {
    e.preventDefault();
    const max = parseFloat(
      (this.state.yourmax / 100) * this.state.percentage
    ).toFixed(2);
    this.setState({
      workingweight: max
    });
    console.log(max);
  };

  render() {
    return (
      <div className='percentageContainer'>
        <div className='secondContainer'>
          <form onSubmit={this.calcPercentage} className='formcss'>
            <label>
              <p>
                Insert your <span style={{ color: '#fd4e00' }}>Max</span>
              </p>
              <br />
              <input
                className='inputcss'
                type='number'
                value={this.state.yourmax}
                onChange={this.HandleYourMax}
              />
            </label>
            <label>
              <p>
                Now pick the <span style={{ color: '#fd4e00' }}>%</span> you'd
                like to work with
              </p>
              <input
                className='inputcss'
                type='number'
                value={this.state.percentage}
                onChange={this.HandlePercentages}
              />
            </label>
            <br />
            <input type='submit' />
            <p>
              Weight:{' '}
              <span style={{ color: '#fd4e00', fontSize: '20px' }}>
                {this.state.workingweight}{' '}
              </span>{' '}
              kg
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Percentages;
