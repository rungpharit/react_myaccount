import React, { Component } from 'react';
import IncomeMoney from './IncomeMoney';

class IncomeMoneys extends Component {
  render() { 
   
    return ( 
      <div>
        {
          this.props.incomes.map((income) => (
            <IncomeMoney 
              key={income.id} 
              income = {income}
            />
          ))
        }
      </div>
    );
  }
  
}


 
export default IncomeMoneys;