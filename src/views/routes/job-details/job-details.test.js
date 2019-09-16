import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { Route, Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";

import { initialState, jobDetailsReducer } from "./job-details.reducer";
import JobDetails from "./job-details.index";

afterEach(cleanup);

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

// Mocked state
const mockedState = {
  jobDetails: {
    description: "Comfortable with modern JS stack, experience with React.",
    employment_type: "full_time",
    id: 1,
    title: "Frontend Developer"
  },
  loader: {
    isLoading: false
  }
};

const renderComponent = mockedState => {
  return render(
    <Provider
      store={createStore(
        jobDetailsReducer,
        { ...initialState, ...mockedState },
        applyMiddleware(thunk)
      )}
    >
      <Router
        history={createMemoryHistory({
          initialEntries: ["/job-details/?id=1"]
        })}
      >
        <Route path="/job-details/" component={JobDetails} />
      </Router>
    </Provider>
  );
};

test("Should render job details", () => {
  const { getByText, getByTestId } = renderComponent(mockedState);
  const jobDetailsWrapper = getByTestId("job-details-wrapper");
  // title
  const title = getByText("Frontend Developer");
  expect(jobDetailsWrapper).toContainElement(title);
  // employment_type
  const employmentType = getByText("full_time");
  expect(jobDetailsWrapper).toContainElement(employmentType);
  // description
  const description = getByText(
    "Comfortable with modern JS stack, experience with React."
  );
  expect(jobDetailsWrapper).toContainElement(description);
});
