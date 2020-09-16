import {applyMiddleware, combineReducers, createStore} from "redux";
import curiosityReducer from "./curiosityReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import oportunityReducer from "./oportunityReducer";
import spiritReducer from "./spiritReducer";


let reducers = combineReducers({
    curiosityPage: curiosityReducer,
    oportunityPage: oportunityReducer,
    spiritPage: spiritReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
