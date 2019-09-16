import React, { Component } from "react";
import qs from "querystring";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container } from "../../components/layout/layout.index";
import { Card, CardSection } from "../../components/card/card.index";
import { IconButton } from "../../components/button/button.index";
import { Bullet } from "../../components/bullet/bullet.index";
import Header from "../../components/header/header.index";
import Loader from "../../components/loader/loader.index";

import { getJobDetails } from "./job-details.action";
import { Label, Title, SmallInfo } from "./job-details.style";
import { isEmptyObj } from "../../../utilities/empty-object.index";
import Message from "../../components/message/message.index";

class JobDetails extends Component {
  componentDidMount() {
    // Get job details, using class components intentionally, can be done with hooks as well
    const { id } = qs.parse(this.props.location.search.replace("?", ""));
    this.props.getJobDetails({ id });
  }
  // Go back to jobs list
  gotoJobs = () => {
    this.props.history.push("/jobs");
  };
  render() {
    const {
      title,
      description,
      employment_type,
      location,
      posted_on,
      message = {}
    } = this.props.jobDetails;
    return (
      <>
        {/* Header Section */}
        <Header>
          <IconButton primary onClick={this.gotoJobs}>
            &#8592;
          </IconButton>
          <h3>Job Details</h3>
        </Header>

        {!this.props.isLoading && (
          <Container data-testid="job-details-wrapper">
            <Card>
              {/* Job Title  */}
              <Title>
                {title}
                {posted_on && <SmallInfo>Posted On: {posted_on}</SmallInfo>}
              </Title>
              {location && <SmallInfo>{location}</SmallInfo>}

              {/* Description */}
              {description && (
                <CardSection>
                  <p>
                    <Label>Description: </Label> {description}
                  </p>
                </CardSection>
              )}
              {/* Employment Type */}
              {employment_type && (
                <CardSection>
                  <p>
                    <Label>Employment Type: </Label>
                    <Bullet>{employment_type}</Bullet>
                  </p>
                </CardSection>
              )}
              {!isEmptyObj(message) && !this.props.isLoading && (
                <Message type={message.type} message={message.text} />
              )}
            </Card>
          </Container>
        )}
        {/* show Loader if isLoading true */}
        {this.props.isLoading && <Loader />}
      </>
    );
  }
}

JobDetails.propTypes = {
  jobDetails: PropTypes.object,
  isLoading: PropTypes.bool,
  getJobDetails: PropTypes.func
};

const mapStateToProps = ({ jobDetails, loader }) => {
  return {
    jobDetails,
    isLoading: loader.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getJobDetails }
)(JobDetails);
