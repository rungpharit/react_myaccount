import React, { Component } from 'react';

class Cal extends Component {
  
  onCal = (e) => {
    e.preventDefault();
    this.props.cal(e);
    
 }


  render() { 
    return ( 
      <div >
        <form onSubmit= {this.onCal} >
            <input 
              type="submit" value="CALCULATION"
              className="btn"
              style = {calStyle}
            />
        </form>
      </div>
     );
  }
}
const calStyle = {
  fontSize : '1.1em',
  padding : '10px',
  width : '100%', 
}
export default Cal;