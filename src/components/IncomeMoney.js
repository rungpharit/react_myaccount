import React, { Component } from 'react';

class IncomeMoney extends Component {

  render() { 
    const {money } = this.props.income
    return (
      <div style = {styleP}>
        <p>{money}</p>
      </div> 
     );
  }
}

const styleP = {
  padding : '5px',
  borderBottom : '1px #ccc dotted'
}

export default IncomeMoney;