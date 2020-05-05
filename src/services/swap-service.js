async function getList() {
  try {
    const response = await fetch(
      "https://rn-todo-app-c27d4.firebaseio.com/todos.json"
    );
    const data = await response.json();
    return data; //createList(data);
  } catch (e) {
    console.log(e);
  }
}

export { getList };
