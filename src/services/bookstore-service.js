export default class BookstoreService {
	data = [
		{
			id: 1,
			title: "Eloquent JavaScript, Second Edition",
			author: "Marijn Haverbeke",
			price: 20,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
		},
		{
			id: 2,
			title: "Learning JavaScript Design Patterns",
			author: "Addy Osmani",
			price: 50,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',

		},
		{
			id: 3,
			title: "Speaking JavaScript",
			author: "Axel Rauschmayer",
			price: 35,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',

		},
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error(`Can't get books`));
				} else {
					resolve(this.data);
				}
			}, 700);
		});
	}
}