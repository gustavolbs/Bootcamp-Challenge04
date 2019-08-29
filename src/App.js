import React, { Component } from "react";

import Header from "./components/Header";
import PostList from "./components/PostList";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}
