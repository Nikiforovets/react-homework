import { ADD, SEARCH, FILTER, DELETE, DONE, IMPORTANT } from "./constants";

const add = content => {
  return {
    type: ADD,
    label: content
  };
};

const search = content => {
  return {
    type: SEARCH,
    label: content
  };
};

const filter = content => {
  return {
    type: FILTER,
    label: content
  };
};

const toggleDone = content => {
  return {
    type: DONE,
    id: content
  };
};

const toggleDelete = content => {
  return {
    type: DELETE,
    id: content
  };
};

const toggleImportant = content => {
  return {
    type: IMPORTANT,
    id: content
  };
};

export { add, search, filter, toggleDone, toggleDelete, toggleImportant };
