import React, { Component } from 'react';

class TotalIncome extends Component {
 
  render() { 
    return ( 
      <div>
        <p style = {titleStyle}>{this.props.totalIncomes.totalIncome}</p>
      </div>
     );
  }
}

const titleStyle = {
  padding : '5px'
}
 
export default TotalIncome;