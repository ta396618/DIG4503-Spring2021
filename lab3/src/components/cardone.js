import React from 'react';

class CardOne extends React.Component { 
  render(age){  
 
    return <div class="one"> 
    <h2>About:</h2>
    <p>Age: {this.props.currentAge}</p>
    <p> Color: {this.props.favoriteColor}</p>
    
    </div>
  } 
 
}


export default CardOne;