import React, { useState } from 'react';
import classes from './DeleteComponent.module.css';
import Axios from 'axios';

const DeleteComponent = (props) => {

	const [user_name, setUserName] = useState('');

	const handleRequest = () => {

		if (user_name === '') {
			alert('Enter userName!');
		} else {
			Axios.delete('http://localhost:45030/deleteUserWithFavoriteMovies/' + user_name)
				.then((response) => {
					alert(response.statusText);
					console.log(response);
				})
				.catch((error) => {
					alert(error)
					console.log(error);
				});
		}
	};
    
	return (
		<div className={classes.main_div}>
			<h3>Delete</h3>
			<label>User Name:</label>
			<input type='text' value={user_name} onChange={(e) => setUserName(e.target.value)} />
			<button onClick={handleRequest}>Delete</button>
		</div>
	);
};

export default DeleteComponent;
