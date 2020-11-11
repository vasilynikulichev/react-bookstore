export default class BookstoreService {
	data = [
		{
			id: 1,
			title: "Eloquent JavaScript, Second Edition",
			author: "Marijn Haverbeke",
			price: 19,
			coverImage: "https://images-na.ssl-images-amazon.com/images/I/51mvaK65SKL._SX376_BO1,204,203,200_.jpg",
		},
		{
			id: 2,
			title: "JavaScript The Good Parts",
			author: "Douglas Crockford",
			price: 13,
			coverImage: "https://images-na.ssl-images-amazon.com/images/I/511j6cza5bL._SX379_BO1,204,203,200_.jpg",

		},
		{
			id: 3,
			title: "JavaScript The Definitive Guide",
			author: "David Flanagan",
			price: 25,
			coverImage: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
		},
		{
			id: 4,
			title: "Learning React: Modern Patterns for Developing React Apps",
			author: "Alex Banks",
			price: 43,
			coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg",
		},
		{
			id: 5,
			title: "Learning JavaScript Design Patterns",
			author: "Addy Osmani",
			price: 33,
			coverImage: "https://images-na.ssl-images-amazon.com/images/I/51H-31ivMTL._SX379_BO1,204,203,200_.jpg",

		},
		{
			id: 6,
			title: "Speaking JavaScript",
			author: "Axel Rauschmayer",
			price: 25,
			coverImage: "https://images-na.ssl-images-amazon.com/images/I/51AOPRqoYTL._SX379_BO1,204,203,200_.jpg",
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