import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import HeaderBanner from "./components/HeaderBanner";
import "./App.css";
import { ROLES_ENUM, createUseStyles } from "@autofica/common";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return <Home />;
}

export default App;
