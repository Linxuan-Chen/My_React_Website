/*
 * @Author: your name
 * @Date: 2020-09-22 18:34:21
 * @LastEditTime: 2020-11-10 12:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\App.js
 */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Common/NavBar";
import Routes from "./router/Routes";

function App(props) {
  const [isNavBarShow, setIsNavBarShow] = useState(true);
  useEffect(() => {
    props.scrollPosition.scrollPosition >= 500
      ? setIsNavBarShow(false)
      : setIsNavBarShow(true);
  }, [props.scrollPosition.scrollPosition]);
  return (
    <div className="App" id="anchor">
      {isNavBarShow ? (
        <NavBar displayMode="top" />
      ) : (
          <NavBar displayMode="side" />
        )}
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    scrollPosition: state.scrollPosition,
  };
};

export default connect(mapStateToProps)(App);
