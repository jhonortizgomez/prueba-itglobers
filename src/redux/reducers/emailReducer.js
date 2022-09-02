import { inicialState } from "../inicialState";
import { SET_EMAIL } from "../actions/types";

const emailReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return { ...state };
  }
};

export default emailReducer;
