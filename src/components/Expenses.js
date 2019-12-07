import React, { Component } from 'react';
import ExpenseMoneys from './ExpenseMoneys';
import ExpenseActs from './ExpenseActs';

class Expenses extends Component {
  
  render() { 
    return (  
     <div style = {itemStyle}>
       <div style = {flex}>
        <ExpenseActs 
          delExpenses = {this.props.delExpenses}
          acts = {this.props.expenses}
        />
       </div>

       <div style = {flex}>  
        <ExpenseMoneys 
          expenses = {this.props.expenses}
        />
       </div>
     </div>
    );
  }
}

const itemStyle = {
  backgroundColor :'#f4f4f4',
  display : 'flex',
}
const flex = {
  flex : '1'
}

 
export default Expenses;