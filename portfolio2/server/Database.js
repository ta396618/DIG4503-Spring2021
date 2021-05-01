import MongoClient from 'mongodb';

export default class Database {
	
	constructor() {
		this.url = 'mongodb+srv://TasfiaRaviba:Jg6VnuC7teDQtwLb@cluster0.yuzwq.mongodb.net';
		this.connection = null;
		this.db1 = null;
		this.db2 = null;
		this.collection1 = null;
		this.collection2 = null;
	}

	connect() {
		MongoClient.connect(this.url, { useNewUrlParser: true })
			.then((connection) => {
				this.connection = connection;
				this.db1 = this.connection.db('sample_mflix');
				this.db2 = this.connection.db('portfolio2');
				this.collection1 = this.db1.collection('movies');
				this.collection2 = this.db2.collection('TasfiaRaviba');
				console.log('connected');
			})
			.catch((error) => {
				console.log('error occured', error);
			});
	}
	close() {
		if (this.connection) {
			this.connection.close();
		}
	}
	async createOne(user_name, movieTitle) {
		try {
			//check if user already exist
			const user = await this.collection2.findOne({ user_name: user_name });
			if (user) {
				return 'user already exists';
			} else {
				//searching movie on basis of title
				const movies = await this.collection1.find({ title: movieTitle }).toArray();
				const result = await this.collection2.insertOne({
					user_name: user_name,
					favorites: movies,
				});
				//return created document
				return result.ops[0];
			}
		} catch (error) {
			console.log(error);
		}
	}
	async readOne(user_name) {
		try {
			const result = await this.collection2.findOne({ user_name: user_name });
			if (result) {
				return result;
			} else {
				return 'not found';
			}
		} catch (error) {
			console.log(error);
		}
	}
	async readMany(query) {
		try {
			const result = await this.collection2.find(query).toArray();
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
		}
	}
	async updateOne(user_name, movieTitle) {
		try {
			const movie = await this.collection1.findOne({ title: movieTitle });
			const result = await this.collection2.updateOne(
				{ user_name: user_name },
				{ $push: { favorites: movie } }
			);
			if (result.matchedCount == 0) {
				return 'no document found';
			} else if (result.modifiedCount == 0) {
				return 'values not updated remain same as previous';
			} else {
				return result;
			}
		} catch (error) {
			console.log(error);
		}
	}
	async deleteOne(user_name) {
		try {
			const result = await this.collection2.deleteOne({ user_name: user_name });
			if (result.deletedCount == 1) {
				return 'document deleted';
			} else {
				return 'no document exist';
			}
		} catch (error) {
			console.log(error);
		}
	}
}
