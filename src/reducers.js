const initialState = {
  todoData: [
    { label: "Drink Coffee", important: false, id: 1, done: false },
    { label: "Make Awesome App", important: true, id: 2, done: false },
    { label: "Have a lunch", important: false, id: 3, done: false }
  ],
  searchFilter: "",
  btnFilter: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const newState = state;
      newState.todoData.push({
        label: action.label,
        important: false,
        id: state.todoData.length + 1,
        done: false
      });
      //   const newState = state.todoData.concat({
      //     label: action.label,
      //     important: false,
      //     id: state.todoData.length + 1,
      //     done: false
      //   });
      //   console.log(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export { reducer };
