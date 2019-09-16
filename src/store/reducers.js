/**
 * import all reducers here and passed to combineReducers for store configuration
 */
import { combineReducers } from "redux";

import { jobsReducer } from "../views/routes/jobs/jobs.reducer";
import { jobDetailsReducer } from "../views/routes/job-details/job-details.reducer";
import loader from "../views/components/loader/loader.reducer";

export default combineReducers({
  jobs: jobsReducer,
  jobDetails: jobDetailsReducer,
  loader
});
