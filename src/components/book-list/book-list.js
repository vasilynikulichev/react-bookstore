import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import Spinner from "../spinner";

import { withBookstoreService } from '../hoc';
import {
	booksLoaded,
	booksRequested,
	booksError,
} from '../../actions';
import { compose } from '../../utils';

import './book-list.css';
import ErrorIndicator from "../error-indicator";

class BookList extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error } = this.props;

		if (loading) {
			return <Spinner/>;
		}

		if (error) {
			return <ErrorIndicator/>;
		}

		return (
			<ul className="bool-list">
				{
					books.map((book) => {
						return (
							<li key={book.id}><BookListItem book={book}/></li>
						);
					})
				}
			</ul>
		);
	}
}

const mapStateToProps = ({ books, loading, error }) => {
	return {
		books,
		loading,
		error,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		fetchBooks: () => {
			dispatch(booksRequested());
			bookstoreService.getBooks()
				.then((data) => dispatch(booksLoaded(data)))
				.catch((err) => dispatch(booksError(err)));
		},
	}
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);