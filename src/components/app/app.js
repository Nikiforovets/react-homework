import React from "react";
import Counter from "../counter";

class App extends React.Component {
  render() {
    return <Counter />;
  }
}

export default App;

// const update = () => {
//     console.log(store.getState());
//   };

//   store.subscribe(update);

//   store.dispatch(inc());
//   store.dispatch(inc());
//   store.dispatch({ type: "sadfasdf" });
//   store.dispatch({ type: "dec" });
//   store.dispatch(rnd(3));
