import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import { reducer as formReducer } from "redux-form";
import lunchOrderReducer from "./lunchOrderReducer";

export default combineReducers({
    form: formReducer,
    register: registerReducer,
    lunchOrder: lunchOrderReducer,
});