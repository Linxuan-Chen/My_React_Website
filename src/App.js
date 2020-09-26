/*
 * @Author: your name
 * @Date: 2020-09-22 18:34:21
 * @LastEditTime: 2020-09-26 07:49:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\App.js
 */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Common/NavBar";
import Routes from "./router/Routes";

function App(props) {
  const [isNavBarShow, setIsNavBarShow] = useState(true);
  useEffect(() => {
    props.scrollPosition.scrollPosition >= 600
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
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    scrollPosition: state.scrollPosition,
  };
};

export default connect(mapStateToProps)(App);
