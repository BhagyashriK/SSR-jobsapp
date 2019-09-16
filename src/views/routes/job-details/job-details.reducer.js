import { GET_JOB_DETAILS } from "./job-details.actionTypes";

export const initialState = {};

export function jobDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOB_DETAILS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
