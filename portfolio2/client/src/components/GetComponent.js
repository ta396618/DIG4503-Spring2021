import React, { useState } from 'react';
import classes from './GetComponent.module.css';
import Axios from 'axios';

function GetComponent(props) {

	const [user_name, setUserName] = useState('');

	const handleGetRequest = () => {

		if (user_name) {
			Axios.get('http://localhost:45030/userWithFavoriteMov/' + user_name)
				.then((response) => {
					alert(response.statusText);
					console.log(response);
				})
				.catch((error) => {
					alert(error)
					console.log(error);
				});
		} else {
			alert('Enter USER_NAME!');
		}
	};
	return (
		<div className={classes.main_div}>
			<h3>Find User Name and Favorite Movies on Basis of User Name</h3>
			<label>UserName:</label>
			<input type='text' value={user_name} onChange={(e) => setUserName(e.target.value)} />
			<button onClick={handleGetRequest}>GET</button>
		</div>
	);
}

export default GetComponent;
