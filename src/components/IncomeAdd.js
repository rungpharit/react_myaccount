import React, { Component } from 'react';

class IncomeAdd extends Component {
  
  state = { 
    activity : '',
    money : ''
   }
  onChange = (e) => this.setState({[e.target.name] : e.target.value});

  onSubmit = (e) => {
     e.preventDefault();
     if (this.state.activity === '' || this.state.money === '') {
      alert("Please, Type again ")
      return null;
     } else {
      this.props.incomeAdd(this.state);
      this.setState({activity:'',money: ''})
     }
  }

  render() { 
    return ( 
      <div style = {{width : '100%'}}>
        <div style={titleStyle}>
          <p style={{marginLeft :'5%'}}>INCOME</p>
        </div>
        <div>
          <form onSubmit= {this.onSubmit} style = {{display : 'flex'}}>
            <input 
              type="text" 
              name="activity" 
              placeholder = "  Your activity ..."
              style = {inputStyle}
              value ={this.state.activity}
              onChange = {this.onChange}
            />
            <input 
              type="number"
              name="money"
              placeholder = "  Amount of money ..."
              style = {inputStyle}
              value ={this.state.money}
              onChange = {this.onChange}
            />
            <input 
              type="submit" value="Submit"
              className="btn"
              style = {submitStyle}
            />
          </form>
        </div>
      </div>

     
     );
  }
}

const inputStyle = {
  flex : '4',
  padding : '5px',
  border: 'none',
  width : '100%'
 
}
const submitStyle = {
  flex : '1'
}

const titleStyle = {
  marginTop: '30px',
  background : '#333',
  color :'white',
  textAlign : 'left',
  padding : '10px',
 
}
 
export default IncomeAdd;