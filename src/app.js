import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ErrorBoundary from "./views/components/error-boundary/error-boundary.index";
import { GlobalStyles } from "./views/components/normalize/normalize.index";

import Jobs from "./views/routes/jobs/jobs.index";
import JobDetails from "./views/routes/job-details/job-details.index";

const App = () => {
  return (
    // global error wrapper in case DOM crashes
    <ErrorBoundary>
      {/* Normalize browser default style */}
      <GlobalStyles />

      {/* routes */}
      <Switch>
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/job-details/" component={JobDetails} />
        <Route path="*" render={() => <Redirect to="/jobs" />} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
