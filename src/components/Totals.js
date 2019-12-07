import React, { Component } from 'react';
import TotalExpenses from './TotalExpenses';
import TotalIncomes from './TotalIncomes';
import TotalNets from './TotalNets';
import Cal from './Cal';


class Totals extends Component {
  render() { 
    return ( 
      <div style = {disStyle}>

        <div style = {btnStyle}>
            <Cal cal = {this.props.cal}/>
        </div>

        <div style={calStyle}>

          <div >
            <p style = {titleStyle}>Total income</p>
            <p style = {titleStyle}>Total expense</p>
            <p style = {titleStyle}>Net Total</p>
          </div>

          <div style = {totalStyle}>
            <TotalIncomes totals = {this.props.totals}/>
            <TotalExpenses totals = {this.props.totals}/>
            <TotalNets totals = {this.props.totals}/>
          </div>

        </div>

      </div>
     );
  }
}
const disStyle = {
 border : 'none',
 float : 'right',
 marginRight : '15%',
 marginTop : '5%',


 
}

const btnStyle = {
  border : 'none',
}

const calStyle = { 
  border : 'none',
  display : 'flex',
  background : '#333',
  color : 'white'
}

const titleStyle = {
  padding : '5px',


}

const totalStyle = {
  marginLeft : '40px',

  }
export default Totals;