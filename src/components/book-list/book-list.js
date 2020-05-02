import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import Spinner from "../spinner";
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksLoading, booksAddedToCard } from "../../actions";
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
    const { bookstoreService, booksLoaded, booksLoading } = this.props;
    booksLoading();
    bookstoreService.getBooks().then(data => booksLoaded(data));
  }

  render() {
    const { books, loading, booksAddedToCard } = this.props;
    if (loading) return <Spinner />;
    return <BookList books={books} booksAddedToCard={booksAddedToCard} />;
  }
}

const mapStateToProps = ({book:{ books, loading }}) => {
  return { books, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    booksLoaded: id => dispatch(booksLoaded(id)),
    booksLoading: () => dispatch(booksLoading()),
    booksAddedToCard: id => dispatch(booksAddedToCard(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
