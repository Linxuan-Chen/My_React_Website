import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
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
