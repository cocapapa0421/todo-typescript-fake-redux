import store from "../configureStore";

export default function increment(step = 1) {
  store.dispatch({
    type: "INCREMENT",
    payload: { step },
  });
}
