import { showLoader, hideLoader } from "../../components/loader/loader.action";
import { GET_JOB_DETAILS } from "./job-details.actionTypes";
import db from "../../../utilities/db";

// Faked API response, Ideally data should be pulled from API server
export const getJobDetails = ({ id }) => dispatch => {
  showLoader(dispatch);
  return new Promise(function(resolve, reject) {
    const jobDetails = db.jobs.filter(job => job.id == id);
    hideLoader(dispatch);
    dispatch({ type: GET_JOB_DETAILS, payload: jobDetails[0] });
    resolve(db);
  });
};
