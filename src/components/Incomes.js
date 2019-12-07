import React, { Component } from 'react';
import IncomeMoneys from './IncomeMoneys';
import IncomeActs from './IncomeActs';

class Incomes extends Component {
  
  render() { 
    return (  
     <div style = {itemStyle}>
       <div style = {flex}>
        <IncomeActs 
          delIncomes = {this.props.delIncomes}
          acts = {this.props.incomes}
        />
       </div>
       <div style = {flex}>  
        <IncomeMoneys 
          incomes = {this.props.incomes}
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

export default Incomes;