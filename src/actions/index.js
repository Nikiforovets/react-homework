const booksLoaded = newBooks => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: "BOOKS_LOADED",
        payload: newBooks
      });
    }, 1000);
  };
};

const booksLoading = () => {
  return {
    type: "BOOKS_LOADING"
  };
};

const booksAddedToCard = id => {
  return {
    type: "BOOKS_ADDED_TO_CARD",
    payload: id
  };
};

const booksRemovedFromCard = id => {
  return {
    type: "BOOKS_REMOVED_FROM_CARD",
    payload: id
  };
};

const booksDeletedFromCard = id => {
  return {
    type: "BOOKS_DELETED_FROM_CARD",
    payload: id
  };
};

const catchNetworkError = () => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: "NETWORK_ERROR"
      });
    }, 1000);
  };
};

export {
  booksLoaded,
  booksLoading,
  booksAddedToCard,
  booksRemovedFromCard,
  booksDeletedFromCard,
  catchNetworkError
};
