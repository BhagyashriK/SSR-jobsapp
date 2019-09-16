import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { ListItem } from "../list/list.index";
import { Title } from "./job.style";
import { Bullet } from "../bullet/bullet.index";

const Job = ({ job, history }) => {
  const { id, title, employment_type } = job;

  const goToJobDetails = () => {
    history.push(`job-details/?id=${id}`);
  };

  return (
    <ListItem key={id} onClick={goToJobDetails}>
      <Title>{title}</Title>
      <Bullet>{employment_type}</Bullet>
    </ListItem>
  );
};

Job.propTypes = {
  job: PropTypes.object
};

export default withRouter(Job);
