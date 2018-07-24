import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import lunchOrderReducer from "./lunchOrderReducer";
import adminReducer from "./adminReducer";
import registerReducer from "./registerReducer";

export default combineReducers({
    form: formReducer,
    register: registerReducer,
    lunchOrder: lunchOrderReducer,
    admin: adminReducer
});