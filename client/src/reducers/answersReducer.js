export const answersReducer = (state = {}, action) => {
  switch (action.type) {
    case "ANSWER_SUBMITTED":
      return {
        ...state,
        answers: action.payload.answers,
      };
    default:
      return state;
  }
};
