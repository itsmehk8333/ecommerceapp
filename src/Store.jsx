import { createStore } from "redux";
import { BagReducer } from "./BagRedux/BagReducer";


export const store = createStore(BagReducer);
console.log(store.getState())