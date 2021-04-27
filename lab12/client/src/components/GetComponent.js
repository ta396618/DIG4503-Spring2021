import React, { useState } from 'react';
import classes from './GetComponent.module.css';
import Axios from 'axios';

function GetComponent(props) {

	const [ISBN, setNumber] = useState('');
    
	const handleGetRequest = () => {

		if (ISBN) {
			Axios
				.get('http://localhost:45030/books/' + ISBN)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			alert('Enter ISBN!');
		}
	};
	return (

		<div className={classes.main_div}>
			<label>ISBN:</label>
			<input type='text' value={ISBN} onChange={(e) => setNumber(e.target.value)} />
			<button onClick={handleGetRequest}>GET</button>
		</div>
	);
}

export default GetComponent;
