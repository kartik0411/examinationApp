import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import toastReducer from "./reducers/toastReducer";
import { answersReducer } from "./reducers/answersReducer";

const userLoginStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
const answersStorage = localStorage.getItem("answers")
  ? JSON.parse(localStorage.getItem("answers"))
  : [];
const reducers = combineReducers({
  userLogin: userLoginReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
  answerReducer: answersReducer,
});

const initialState = {
  userLogin: { userInfo: userLoginStorage },
  answerReducer: { answers: answersStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
