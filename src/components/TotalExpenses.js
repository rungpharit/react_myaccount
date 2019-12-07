import React, { Component } from 'react';
import TotalExpense from './TotalExpense';

class TotalIncomes extends Component {
 
  render() {     

    return ( 
      <div>
        
        {
          this.props.totals.map((totalExpenses) => (
            <TotalExpense
            key={totalExpenses.id}
              totalExpenses = {totalExpenses}
            />
          ))
        }     
      </div>
     );
  }
}



export default TotalIncomes;