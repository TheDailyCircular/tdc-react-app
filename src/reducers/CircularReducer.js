import { GET_CIRCULARS } from "../actions/types";

const initialState = {
  circulars: [],
  circular: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CIRCULARS:
      return {
        ...state,
        circulars: action.payload
      }

    default:
      return state
  }
}
