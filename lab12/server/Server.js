import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';
const App = Express();
const port = 45030;
const database = new Database();
database.connect();

App.use(CORS());
App.use(Express.json());

App.put('/books/:ISBN', function (req, res) {
	const ISBN = req.params.ISBN;
	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;
	console.log(ISBN);
	console.log(title);
	database
		.createOne(ISBN, title, author, description)
		.then((result) => {
			res.json({
				created_document: result,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

App.get('/books/:ISBN', function (req, res) {
	const ISBN = req.params.ISBN;
	database.readOne(ISBN).then((result) => {
		res.json({
			book: result,
		});
	});
});

App.post('/books/search', function (req, res) {
	console.log(req.query);
	database
		.readMany(req.query)
		.then((result) => {
			res.json({
				books: result,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

App.patch('/books/:ISBN', function (req, res) {
	const ISBN = req.params.ISBN;
	database.updateOne(ISBN, req.body).then((result) => {
		res.json({
			updated_document: result,
		});
	});
});

App.delete('/books/:ISBN', function (req, res) {
	const ISBN = req.params.ISBN;
	database.deleteOne(ISBN).then((result) => {
		res.json({
			msg: result,
		});
	});
});

App.listen(port, () => {
	console.log(`listening on port ${port}`);
});

database.close();
