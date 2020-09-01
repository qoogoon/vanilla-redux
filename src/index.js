import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onAdd = () => {
  countStore.dispatch({ type: ADD });
};
const onMinus = () => {
  countStore.dispatch({ type: MINUS });
};
const onChange = () => {
  number.innerText = countStore.getState();
};
add.addEventListener("click", onAdd);
minus.addEventListener("click", onMinus);
countStore.subscribe(onChange);
