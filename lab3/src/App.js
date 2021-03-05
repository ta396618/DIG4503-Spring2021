import React from 'react';
import HomePage from './components/homepage';
import CardOne from './components/cardone';
import CardTwo from './components/cardtwo';

function submit() {
  alert('Your information was submitted!'); 
}
function App() { 
 const fname = 'Tasfia';
 const age = '24';
 const fcolor= 'Green';
 const address='Township';
 const phone='18-0982-223';

 return ( //passes attributes
<div class="display">
   <HomePage firstName={fname} />
   <CardOne currentAge={age} favoriteColor={fcolor} />
   <CardTwo myAddress={address} myPhone={phone} />
   
   <button onClick={submit}>Submit</button> 

   </div>
 )

}


export default App;
