import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { imagesReducer } from "./images/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    images: imagesReducer
})

export default rootReducer
