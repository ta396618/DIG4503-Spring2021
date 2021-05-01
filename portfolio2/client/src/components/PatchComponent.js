import React, { useState } from 'react';
import classes from './PatchComponent.module.css';
import Axios from 'axios';

const PatchComponent = (props) => {

	const [user_name, setUserName] = useState('');
	const [title, setTitle] = useState('');

	const handleRequest = () => {

		if (user_name === '' || title === '') {
			alert('Enter user name and movie title!');
		} else {
			Axios.patch('http://localhost:45030/update/' + user_name, {
				movieTitle: title,
			})
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
			<h3>Add new movie to Favorites</h3>
			<label>User Name:</label>
			<input type='text' value={user_name} onChange={(e) => setUserName(e.target.value)} />
			<label>Movie Title:</label>
			<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			<button onClick={handleRequest}>Update</button>
		</div>
	);
};

export default PatchComponent;
