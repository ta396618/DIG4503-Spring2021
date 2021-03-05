import React from 'react';

class CardTwo extends React.Component { 
  render(address){  

    return <div class="three"> 
    <h2>Contact:</h2>
    <p>Address: {this.props.myAddress}</p>
    <p>Phone: {this.props.myPhone}</p>
    
    </div>
  } 
 
}


export default CardTwo;