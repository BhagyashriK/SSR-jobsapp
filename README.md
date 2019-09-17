Server side rendered react application for displaying the Jobs.
Consist of two routes: 
- Job List 
- Job Details

**Tech Stack:**

React, Styled components, Jest, React Testing library, Create React App

Other tools:
Prettier - code formatter

**Local Setup Steps:**

- clone repository using `git clone git@github.com:BhagyashriK/SSR-jobsapp.git`
- run `yarn install` to install the dependencies into root directory
- run `yarn build` to build code
- run `yarn server` to serve SSR

**Test suite Steps:**
`yarn test`

Note: `yarn start` to run application on client side

**Assumptions:**

- As encouraged in https://github.com/heyjobs/react-task, I am using Create React App for server side rendering though CRA itself suggest to use Next.js or Razzle for SSR
- Using mocked data for jobs & job details.
- Added extra fields like job location, posted date
