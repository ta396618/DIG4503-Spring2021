import React, { useState } from 'react';
import classes from './GetAllComponent.module.css';
import Axios from 'axios';

function GetAllComponent(props) {

	const handleGetRequest = () => {

		Axios.get('http://localhost:45030/userWithFavoriteMov')
			.then((response) => {
				alert(response.statusText);
				console.log(response);
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			});
	};

	return (
		<div className={classes.main_div}>
			<h3>Get All</h3>
			<button onClick={handleGetRequest}>GET</button>
		</div>
	);
}

export default GetAllComponent;
