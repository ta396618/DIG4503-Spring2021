import React, { useState } from 'react';
import Axios from 'axios';
import classes from './PutComponent.module.css';
const PutComponent = (props) => {
    
	const [ISBN, setNumber] = useState('');
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');

	const handlePutRequest = () => {

		if (ISBN === '' || title === '' || author === '') {
			alert('Enter Input Properly!');
		} else {
			Axios
				.put("http://localhost:45030/books/"+ ISBN, {
					title: title,
					author: author,
					description: description,
				})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	return (
		<div className={classes.main_div}>
			<label>ISBN:</label>
			<input type='text' value={ISBN} onChange={(e) => setNumber(e.target.value)} />
			<label>Title:</label>
			<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			<label>Author:</label>
			<input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
			<label>Description:</label>
			<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
			<button onClick={handlePutRequest}>PUT</button>
		</div>
	);
};

export default PutComponent;
