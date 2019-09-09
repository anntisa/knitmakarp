import React from 'react';
// import logo from './logo.svg';
import Main from "./main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  return (
    <div className="AppRouter">
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>

  );
}

export default AppRouter;
