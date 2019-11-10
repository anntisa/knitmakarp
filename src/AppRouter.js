import React from 'react';
// import logo from './logo.svg';
// import Main from "./main/Main";
import Home from "./home/Home";
import Item from "./item/Item";
import ItemList from "./item-list/ItemList";
import HeaderNav from "./headernav/HeaderNav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  return (
    <div className="AppRouter">
        <HeaderNav />
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/item-list" component={ItemList} />
            <Route path="/item" component={Item} />
        </Router>
    </div>

  );
}

export default AppRouter;
