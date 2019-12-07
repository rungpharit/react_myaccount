import React, { Component } from 'react';
import IncomeAct from './IncomeAct';

class IncomeActs extends Component {
  render() { 
    return ( 
      <div>
        {
          this.props.acts.map((act) => (
            <IncomeAct 
              key={act.id} 
              act = {act}
              delIncomes = {this.props.delIncomes}
            />
          ))
        }
      </div>
    );
  }
  
}

 
export default IncomeActs;