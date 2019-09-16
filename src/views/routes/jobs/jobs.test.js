import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import { jobsReducer } from "./jobs.reducer";
import Jobs from "./jobs.index";

afterEach(cleanup);

/***
 * mocked state, thunk, redux, router setup for test suite,
 * can be moved to common file later on
 ***/
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(jobsReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory({ initialEntries: ["/jobs"] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store
  };
}

// Ideally, export from mocked data files. So that can be reused across test suits
const mockedState = {
  jobs: {
    list: [
      {
        id: 1,
        title: "Frontend Developer",
        description: "Comfortable with modern JS stack, experience with React.",
        employment_type: "full_time"
      },
      {
        id: 2,
        title:
          "Senior Software Development Engineer- Windows Device Driver Developer",
        description:
          "A Bachelor of Science degree in Computer Science, Electrical / Electronics Engineering, or equivalent. Strong coding skills in C++ and C. Experience with large and complex software systems that feature support of multiple operating systems, interoperability with third-party software, and backward compatibility with previous product versions. Expertise programming on the Windows operating system, including using Visual Studio and related tools. Experience with Windows device drivers, especially relating to the Network Driver Interface Specification (NDIS), Transport Driver Interface (TDI), Windows Filtering Platform (WFP), lightweight filter (LWF) drivers, and miniport drivers.Familiarity with networking protocols, including TCP/IP, 802.1X authentication, EAP protocols, and TLS/SSL. Familiarity with openssl and/or VPN technologies.",
        employment_type: "full_time"
      }
    ],
    message: {}
  },
  loader: {
    isLoading: false
  }
};

test("Should render list of jobs", () => {
  const { getByTestId } = renderWithRedux(<Jobs />, {
    initialState: mockedState
  });
  const jobsList = getByTestId("job-list");
  expect(jobsList.children.length).toBe(2);
});

test("Should show 'No Jobs Found' message if jobs list is empty", () => {
  mockedState.jobs.list = [];
  mockedState.jobs.message = { type: "info", text: "No Jobs Found" };
  const { getByText, getByTestId } = renderWithRedux(<Jobs />, {
    initialState: mockedState
  });
  const jobListWrapper = getByTestId("job-list-wrapper");
  const emptyMsg = getByText("No Jobs Found");
  expect(jobListWrapper).toContainElement(emptyMsg);
});

test("Should show Loader if is request is in progress", () => {
  mockedState.loader.isLoading = true;
  const { getByText, getByTestId } = renderWithRedux(<Jobs />, {
    initialState: mockedState
  });
  const jobListWrapper = getByTestId("job-list-wrapper");
  const loader = getByText("Loading...");
  expect(jobListWrapper).toContainElement(loader);
});
