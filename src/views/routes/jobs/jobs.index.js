import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container } from "../../components/layout/layout.index";
import { List } from "../../components/list/list.index";
import Job from "../../components/job/job.index";
import Loader from "../../components/loader/loader.index";
import Header from "../../components/header/header.index";
import Message from "../../components/message/message.index";

import { getJobs } from "./jobs.action";
import { isEmptyObj } from "../../../utilities/empty-object.index";

const Jobs = ({ getJobs, jobs, message, isLoading }) => {
  // Get jobs on component mount
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const renderList = () => {
    return jobs.map(job => <Job key={job.id} job={job} />);
  };

  return (
    <>
      {/* Header Section */}
      <Header>
        <h3>Jobs</h3>
      </Header>

      <Container data-testid="job-list-wrapper">
        {/* show Loader if request is in progress */}
        {isLoading && <Loader />}

        {/* Jobs List */}
        {jobs.length > 0 && <List data-testid="job-list">{renderList()}</List>}

        {/* Show empty message if jobs list is empty */}
        {!isEmptyObj(message) && !isLoading && (
          <Message type={message.type} message={message.text} />
        )}
      </Container>
    </>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.array,
  isLoading: PropTypes.bool,
  getJobs: PropTypes.func
};

const mapStateToProps = ({ jobs, loader }) => {
  return {
    jobs: jobs.list,
    message: jobs.message,
    isLoading: loader.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getJobs }
)(Jobs);
