import { RESET_TOAST_STATE, SET_TOAST_STATE } from "../constants/constants";

const initialState = {
  showToast: false,
  message: "",
  toastType: "info",
  placement: "topRight",
};

export default function toastReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOAST_STATE:
      return { ...state, ...action.payload };
    case RESET_TOAST_STATE:
      return initialState;
    default:
      return state;
  }
}
