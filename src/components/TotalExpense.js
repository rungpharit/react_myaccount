import React, { Component } from 'react';

class TotalExpense extends Component {
 
  render() { 
    return ( 
      <div>
        
        <p style = {titleStyle}>{this.props.totalExpenses.totalExpense}</p>
      </div>
     );
  }
}

const titleStyle = {
  padding : '5px'
}
 
export default TotalExpense;