import reducers from "./reducers";
import { combineReducers, createStore } from "./createStore";

const combinedReducers = combineReducers(reducers);
const store = createStore(combinedReducers);
export default store;
