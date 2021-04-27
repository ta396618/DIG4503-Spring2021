import React, { useState } from 'react';
import classes from './PostComponent.module.css';
import Axios from 'axios';

const PostComponent = (props) => {

	const [ISBN, setNumber] = useState('');
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [requestType, setRequestType] = useState('post');

	const handleRequest = () => {

		if (requestType === 'post') {
			if (title === '' || author === '') {
				alert('Enter title And author!');
			} else {
				Axios
					.post('http://localhost:45030/books/search', null, {
						params: {
							title: title,
							author: author,
						},
					})
					.then((response) => {
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		} else if (requestType === 'patch') {
			if ((ISBN === '' || title === '', author === '')) {
				alert('Enter ISBN,Title And Author!');
			} else {
				Axios
					.patch('http://localhost:45030/books/' + ISBN, {
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
		} else {
			if (ISBN === '') {
				alert('Enter ISBN');
			} else {
				Axios
					.delete('http://localhost:45030/books/' + ISBN)
					.then((response) => {
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					});
			}
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
			<label>Request Type:</label>
			<select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
				<option value='post'>post</option>
				<option value='patch'>patch</option>
				<option value='delete'>delete</option>
			</select>
			<button onClick={handleRequest}>Request</button>
		</div>
	);
};

export default PostComponent;
