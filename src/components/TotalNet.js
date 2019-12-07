import React, { Component } from 'react';

class TotalNet extends Component {

  render() { 
    return ( 
      <div>
        <p style = {titleStyle}>{this.props.totalNets.netTotal}</p>
      </div>
     );
  }
}

const titleStyle = {
  padding : '5px'
  
  
}
 
export default TotalNet;