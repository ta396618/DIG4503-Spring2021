import Axios from "axios"; 
import {useState} from "react"; 
import React from "react"; 

function GetName(){
    const [newName, setNewName] = useState ("");

    function searchName  (){
        Axios.get("http://localhost:45030/people/" + newName)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("Error Found" + error);
        });

}; 

return (
    <div>
    <h1> Press the button to search a name! </h1>
    <input type="text" onChange={(event) => setNewName(event.target.value)}/>
    <button onClick={()=> searchName()}>Click Here!</button>
    <p>{newName}</p>
    </div>
)

}
export default GetName; 