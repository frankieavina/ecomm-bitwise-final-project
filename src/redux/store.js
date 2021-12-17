import { createStore } from "redux";

import commentReducer from "./reducers/commentReducer";

const store = createStore(commentReducer);

export default store;