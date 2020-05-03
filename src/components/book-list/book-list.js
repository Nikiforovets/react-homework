import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { withBookstoreService } from "../hoc";
import {
  booksLoaded,
  booksLoading,
  booksAddedToCard,
  catchNetworkError
} from "../../actions";
import { compose } from "../../utils";

import "./book-list.css";

const BookList = ({ books, booksAddedToCard }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book} booksAddedToCard={booksAddedToCard} />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksLoading,
      catchNetworkError
    } = this.props;
    booksLoading();
    bookstoreService
      .getBooks()
      .then(data => booksLoaded(data))
      .catch(e => catchNetworkError());
  }

  render() {
    const { books, loading, booksAddedToCard, networkError } = this.props;
    if (loading) return <Spinner />;
    if (!networkError) {
      return <BookList books={books} booksAddedToCard={booksAddedToCard} />;
    } else return <ErrorIndicator />;
  }
}

const mapStateToProps = ({ book: { books, loading, networkError } }) => {
  return { books, loading, networkError };
};

const mapDispatchToProps = dispatch => {
  return {
    booksLoaded: id => dispatch(booksLoaded(id)),
    booksLoading: () => dispatch(booksLoading()),
    booksAddedToCard: id => dispatch(booksAddedToCard(id)),
    catchNetworkError: () => dispatch(catchNetworkError())
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
