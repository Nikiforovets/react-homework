const initialState = {
  books: [],
  loading: true,
  cardItems: [],
  totalOrdered: 200
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADING":
      return {
        ...state,
        loading: true
      };
    case "BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case "BOOKS_ADDED_TO_CARD":
      return updateCard(state, action, 1);
    case "BOOKS_REMOVED_FROM_CARD":
      return updateCard(state, action, -1);
    default:
      return state;
  }
};

const updateCard = (state, action, amount) => {
  const bookId = action.payload;
  const book = state.books.find(item => item.id === bookId);
  const bookInCard = state.cardItems.find(item => item.id === bookId);
  if (bookInCard) {
    if (bookInCard.count > 1 || amount === 1)
      return {
        ...state,
        cardItems: state.cardItems.map(item => {
          if (item.id === bookInCard.id) {
            item.count += amount;
            item.total = book.price * item.count;
          }
          return item;
        })
      };
    else {
      return {
        ...state,
        cardItems: state.cardItems.filter(item => item.id !== book.id)
      };
    }
  } else {
    const newItem = {
      id: book.id,
      name: book.title,
      total: book.price,
      count: 1
    };
    return {
      ...state,
      cardItems: state.cardItems.concat(newItem)
    };
  }
};

export default reducer;
