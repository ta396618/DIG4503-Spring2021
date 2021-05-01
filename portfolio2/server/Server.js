import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';
const App = Express();
const port = 45030;
const database = new Database();
database.connect();

App.use(CORS());
App.use(Express.json());

App.put('/addToFavorites/:user_name', function (req, res) {
	const user_name = req.params.user_name;
	const movieTitle = req.body.movieTitle;
	database
		.createOne(user_name, movieTitle)
		.then((result) => {
			res.json({
				created_document: result,
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

App.get('/userWithFavoriteMov/:user_name', function (req, res) {
	const user_name = req.params.user_name;
	database.readOne(user_name).then((result) => {
		res.json({
			document: result,
		});
	});
});
App.get('/userWithFavoriteMov', function (req, res) {
	database.readMany(req.query).then((result) => {
		res.json({
			documents: result,
		});
	});
});

App.patch('/update/:user_name', function (req, res) {
	const user_name = req.params.user_name;
	const movieTitle = req.body.movieTitle;
	database.updateOne(user_name, movieTitle).then((result) => {
		res.json({
			updated_document: result,
		});
	});
});

App.delete('/deleteUserWithFavoriteMovies/:user_name', function (req, res) {
	const user_name = req.params.user_name;
	database.deleteOne(user_name).then((result) => {
		res.json({
			msg: result,
		});
	});
});

App.listen(port, () => {
	console.log(`listening on port ${port}`);
});

database.close();
