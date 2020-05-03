const initialState = {
  books: [],
  loading: true,
  cardItems: [],
  totalOrdered: 0,
  networkError: false
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
    case "BOOKS_DELETED_FROM_CARD":
      let totalPrice = state.totalOrdered;
      return {
        ...state,
        cardItems: state.cardItems.filter(item => {
          if (item.id === action.payload) totalPrice -= item.total;
          return item.id !== action.payload;
        }),
        totalOrdered: totalPrice
      };
    case "NETWORK_ERROR":
      return {
        ...state,
        loading: false,
        networkError: true
      };
    default:
      return state;
  }
};

const updateCard = (state, action, amount) => {
  const bookId = action.payload;
  const book = state.books.find(item => item.id === bookId);
  const bookInCard = state.cardItems.find(item => item.id === bookId);
  let totalPrice = state.totalOrdered;
  if (bookInCard) {
    if (bookInCard.count > 1 || amount === 1)
      return {
        ...state,
        cardItems: state.cardItems.map(item => {
          if (item.id === bookInCard.id) {
            item.count += amount;
            item.total = book.price * item.count;
            totalPrice += book.price * amount;
          }
          return item;
        }),
        totalOrdered: totalPrice
      };
    else {
      return {
        ...state,
        cardItems: state.cardItems.filter(item => {
          if (item.id === book.id) totalPrice -= item.total;
          return item.id !== book.id;
        }),
        totalOrdered: totalPrice
      };
    }
  } else {
    const newItem = {
      id: book.id,
      name: book.title,
      total: book.price,
      count: 1
    };
    totalPrice += book.price;
    return {
      ...state,
      cardItems: state.cardItems.concat(newItem),
      totalOrdered: totalPrice
    };
  }
};

export default reducer;
