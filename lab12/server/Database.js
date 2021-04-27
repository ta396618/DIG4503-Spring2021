import MongoClient from 'mongodb';

export default class Database {
	constructor() {
		this.url = 'mongodb+srv://TasfiaRaviba:Jg6VnuC7teDQtwLb@cluster0.yuzwq.mongodb.net';
		this.connection = null;
		this.db = null;
		this.collection = null;
	}

	connect() {
		MongoClient.connect(this.url, { useNewUrlParser: true })
			.then((connection) => {
				this.connection = connection;
				this.db = this.connection.db('lab11');
				this.collection = this.db.collection('books');
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
	async createOne(ISBN, title, author, description) {
		try {
			const result = await this.collection.insertOne({
				ISBN: ISBN,
				title: title,
				author: author,
				description: description,
			});
			//return created document
			return result.ops[0];
		} catch (error) {
			console.log(error);
		}
	}
	async readOne(ISBN) {
		try {
			const result = await this.collection.findOne({ ISBN: ISBN });
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
			const result = await this.collection.find(query).toArray();
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
		}
	}
	async updateOne(ISBN, data) {
		try {
			const result = await this.collection.updateOne({ ISBN: ISBN }, { $set: data });
			if (result.matchedCount == 0) {
				return 'no document found';
			} else if (result.modifiedCount == 0) {
				return 'values not updated remain same as previous';
			} else {
				// return modified fields
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	}
	async deleteOne(ISBN) {
		try {
			const result = await this.collection.deleteOne({ ISBN: ISBN });
			if (result.deletedCount == 1) {
				return 'document deleted';
			} else {
				return 'no document exist with this ISBN';
			}
		} catch (error) {
			console.log(error);
		}
	}
}
