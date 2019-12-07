import React, { Component } from 'react';
import TotalNet from './TotalNet';

class TotalNets extends Component {

  render() { 
    return ( 
      <div>
        {
          this.props.totals.map((totalNets) => (
            <TotalNet
            key={totalNets.id}
              totalNets = {totalNets}
            />
          ))
        }     
      </div>
     );
  }
}
 
export default TotalNets;