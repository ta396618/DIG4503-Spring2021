import React from 'react';

class HomePage extends React.Component { //creates class 
  render(fname){  //renders the class properties 
    //displays class properties
    return <div class="two"> <h1>Hello, {this.props.firstName}</h1>

    
    </div>
  } 
 
}

export default HomePage;