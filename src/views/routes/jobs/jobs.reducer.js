import { GET_JOBS } from "./jobs.actionTypes";

export const initialState = {
  list: [],
  message: {}
};

export function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
