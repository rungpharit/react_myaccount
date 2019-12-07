import React from 'react';

function Header () {
  return (
    <header style={headerStyle}>
      <p style = {{fontSize : '2em'}}>MY ACCOUNT</p>
    </header>
  );
}

const headerStyle = {
  width : '100%',
  background : '#333',
  color :'#e0bc75',
  textAlign : 'center',
  padding : '10px'
}

export default Header;