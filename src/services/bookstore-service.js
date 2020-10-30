export default class BookstoreService {
	data = [
		{
			id: 1,
			title: "Eloquent JavaScript, Second Edition",
			author: "Marijn Haverbeke",
			price: 100,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
		},
		{
			id: 2,
			title: "Learning JavaScript Design Patterns",
			author: "Addy Osmani",
			price: 500,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',

		},
		{
			id: 3,
			title: "Speaking JavaScript",
			author: "Axel Rauschmayer",
			price: 350,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',

		},
	];

	getBooks() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(this.data);
			}, 700);
		});
	}
}