import React, { Component } from 'react';
import ExpenseAct from './ExpenseAct';

class ExpenseActs extends Component {
  render() { 
    return ( 
      <div>
        {
          this.props.acts.map((act) => (
            <ExpenseAct 
              key={act.id} 
              act = {act}
              delExpenses = {this.props.delExpenses}
            />
          ))
        }
      </div>
    );
  }
  
}

 
export default ExpenseActs;