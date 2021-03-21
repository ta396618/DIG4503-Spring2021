import Axios from "axios"; 
import {useState} from "react"; 
import React from "react"; 

function PutName(){
    const [newName, setNewName] = useState ("");

    function addName (){
        Axios.put("http://localhost:45030/people/" + newName)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error Found" + error);
        });

}; 

return (
    <div>
    <h1> Press the button to add a name! </h1>
    <input type="text" onChange={(event) => setNewName(event.target.value)}/>
    <button onClick={()=> addName()}>Click Here!</button>
    <p>{newName}</p>
    </div>
)

}
export default PutName; 