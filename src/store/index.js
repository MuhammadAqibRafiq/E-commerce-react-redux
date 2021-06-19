import { combineReducers , createStore } from "redux";

import ProductReducer from './reducer/ProductReducer'
import CartReducer from "./reducer/CartReducer";

const root = combineReducers({
    ProductReducer,
    CartReducer
})

const store = createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;