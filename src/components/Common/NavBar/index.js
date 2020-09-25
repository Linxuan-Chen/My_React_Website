/*
 * @Author: your name
 * @Date: 2020-09-23 10:52:07
 * @LastEditTime: 2020-09-25 19:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\NavBar\index.js
 */
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import style from "./index.module.scss";
import { setScrollPositionAction } from "../../../actions";
import { HashRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar(props) {
  const scrollHandler = useCallback(() => {
    props.setScrollPosition(window.scrollY);
  }, [props]);

  const anchorClickHandler = (anchorName) => {
    scrollToAnchor(anchorName);
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        console.log(anchorElement);
        anchorElement.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <>
      {props.displayMode === "top" ? (
        <Router>
          <div id={style.nav} className="container-fluid">
            <Navbar
              bg="light"
              expand="lg"
              style={{
                color: "red !important",
              }}
            >
              <Navbar.Brand href="#">Linxuan Chen</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 d-flex justify-content-around">
                  <Nav.Link href="#/">HOME</Nav.Link>
                  <Nav.Link href="#education">EDUCATION</Nav.Link>
                  <Nav.Link href="#experience">WORK EXPERIENCES</Nav.Link>
                  <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                  <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </Router>
      ) : (
          <div>
            <Router>
              <div className={style.nav + " container-fluid d-sm-none d-block"}>
                <Navbar
                  bg="light"
                  expand="lg"
                  style={{
                    color: "red !important",
                  }}
                >
                  <Navbar.Brand href="#">Linxuan Chen</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 d-flex justify-content-around">
                      <Nav.Link href="#">HOME</Nav.Link>
                      <Nav.Link href="#education">EDUCATION</Nav.Link>
                      <Nav.Link href="#experience">WORK EXPERIENCES</Nav.Link>
                      <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                      <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </Router>
            <Router>
              <div
                className={style.side_bar + " d-sm-flex d-none h-50 mt-1 text-center shadow-lg"}
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <button onClick={() => anchorClickHandler("anchor")}>Back To Top</button>
              </div>
            </Router>
          </div>
        )}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setScrollPosition: (value) => {
      dispatch(setScrollPositionAction(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
