import React, { Component } from 'react';
import TotalIncome from './TotalIncome';

class TotalIncomes extends Component {
 
  render() {     

    return ( 
      <div>
        {
          this.props.totals.map((totalIncomes) => (
            <TotalIncome
              key={totalIncomes.id}
              totalIncomes = {totalIncomes}
            />
          ))
        }     
      </div>
     );
  }
}



export default TotalIncomes;