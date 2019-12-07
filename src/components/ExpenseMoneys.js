import React, { Component } from 'react';
import ExpenseMoney from './ExpenseMoney';

class ExpenseMoneys extends Component {
  render() { 
    
    return ( 
      <div>
        {
          this.props.expenses.map((expense) => (
            <ExpenseMoney 
              key={expense.id} 
              expense = {expense}
            />
          ))
        }
      </div>
    );
  }
  
}


 
export default ExpenseMoneys;