import { showLoader, hideLoader } from "../../components/loader/loader.action";
import { GET_JOBS } from "./jobs.actionTypes";
import db from "../../../utilities/db";

// Faked API response, Ideally data should be pulled from API server
export const getJobs = () => dispatch => {
  showLoader(dispatch);
  return new Promise(function(resolve, reject) {
    const jobsData = {
      list: db.jobs
    };
    hideLoader(dispatch);
    dispatch({ type: GET_JOBS, payload: jobsData });
    resolve(db);
  });
};
