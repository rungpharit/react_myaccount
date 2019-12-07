import React, { Component } from 'react';

class ExpenseAct extends Component {

  render() { 
    const {id , activity } = this.props.act
    return (
      <div style = {styleP}>
        <button 
          onClick = {this.props.delExpenses.bind(this,id)}
          style = {btnStyle}>x
        </button> 
        <p 
          style = {{marginLeft : '40px'}}> { activity} 
        </p>
      </div> 
     );
  }
}
 
const styleP = {
  padding : '5px',
  borderBottom : '1px #ccc dotted',
}

const btnStyle = {
  background :'#ff0000',
  color : '#fff',
  border : 'none',
  padding : '3px 5px',
  borderRadius : '50%',
  cursor : 'pointer',
  float:'left',
  marginLeft : '10px'
}

export default ExpenseAct;