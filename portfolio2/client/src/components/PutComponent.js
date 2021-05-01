import React, { useState } from 'react';
import Axios from 'axios';
import classes from './PutComponent.module.css';

const PutComponent = (props) => {
    
	const [user_name, setUserName] = useState('');
	const [title, setTitle] = useState('');

	const handlePutRequest = () => {

		if (user_name === '' || title === '') {
			alert('Enter Input Properly!');
		} else {
			Axios.put('http://localhost:45030/addToFavorites/' + user_name, {
				movieTitle: title,
			})
				.then((response) => {
					alert(response.statusText)
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	
	return (
		<div className={classes.main_div}>
			<h3>Search Movie by Title and add to Favorites</h3>
			<label>UserName:</label>
			<input type='text' value={user_name} onChange={(e) => setUserName(e.target.value)} />
			<label>MovieTitle:</label>
			<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			<button onClick={handlePutRequest}>PUT</button>
		</div>
	);
};

export default PutComponent;
