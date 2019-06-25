import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Heading } from "rimble-ui";
import SideNavLayout from "./Layouts/SideNavLayout";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/side-nav" component={SideNavLayout} />
    </Router>
  );
}

function Home() {
  return (
    <Box maxWidth="600px" mx={"auto"} my={4}>
      <Heading.h1>Available Layouts</Heading.h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/side-nav">Side Navigation</Link>
        </li>
      </ul>
    </Box>
  );
}

export default App;
