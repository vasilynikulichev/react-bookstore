export default class BookstoreService {
	getBooks() {
		return [
			{
				id: 1,
				title: "Eloquent JavaScript, Second Edition",
				author: "Marijn Haverbeke",
			},
			{
				id: 2,
				title: "Learning JavaScript Design Patterns",
				author: "Addy Osmani",
			},
			{
				id: 3,
				title: "Speaking JavaScript",
				author: "Axel Rauschmayer",
			},
		];
	}
}