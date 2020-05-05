import {
  ADD,
  SEARCH,
  FILTER,
  DELETE,
  DONE,
  IMPORTANT,
  SET_LIST
} from "./constants";

const initialState = {
  todoData: [
    // { label: "Drink Coffee", important: false, id: 1, done: false },
    // { label: "Make Awesome App", important: true, id: 2, done: false },
    // { label: "Have a lunch", important: false, id: 3, done: false }
  ],
  searchFilter: "",
  btnFilter: "",
  maxId: 100
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        maxId: state.maxId + 1,
        todoData: state.todoData.concat({
          label: action.label,
          important: false,
          id: state.maxId,
          done: false
        })
      };
    }
    case SEARCH: {
      return {
        ...state,
        searchFilter: action.label
      };
    }
    case FILTER: {
      return {
        ...state,
        btnFilter: action.label
      };
    }
    case IMPORTANT: {
      return {
        ...state,
        todoData: state.todoData.map(item => {
          if (item.id === action.id) {
            item.important = !item.important;
          }
          return item;
        })
      };
    }
    case DELETE: {
      return {
        ...state,
        todoData: state.todoData.filter(item => item.id !== action.id)
      };
    }
    case DONE: {
      return {
        ...state,
        todoData: state.todoData.map(item => {
          if (item.id === action.id) {
            item.done = !item.done;
          }
          return item;
        })
      };
    }
    case SET_LIST: {
      let todoArray = [];
      for (const key in action.data) {
        todoArray.push({
          label: action.data[key].title,
          important: false,
          id: key,
          done: false
        });
      }
      return {
        ...state,
        todoData: todoArray
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
