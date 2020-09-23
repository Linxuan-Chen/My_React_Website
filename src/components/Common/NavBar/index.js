/*
 * @Author: your name
 * @Date: 2020-09-23 10:52:07
 * @LastEditTime: 2020-09-23 18:25:24
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
              <Navbar.Brand href="#home">Linxuan Chen</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 d-flex justify-content-around">
                  <Nav.Link href="#home">HOME</Nav.Link>
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
              <div id={style.nav} className="container-fluid d-sm-none d-block">
                <Navbar
                  bg="light"
                  expand="lg"
                  style={{
                    color: "red !important",
                  }}
                >
                  <Navbar.Brand href="#home">Linxuan Chen</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 d-flex justify-content-around">
                      <Nav.Link href="#home">HOME</Nav.Link>
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
                id={style.side_bar}
                className="d-sm-flex d-none flex-column justify-content-around h-50 mt-1"
              >
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/education">education</NavLink>
                <NavLink to="/experience">experience</NavLink>
                <NavLink to="/portfolio">portfolio</NavLink>
                <NavLink to="/contact">contact</NavLink>
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

// (
//     <div
//       className="container-fluid"
//       style={{
//         position: "fixed",
//         zIndex: 1000,
//       }}
//     >
//       <nav className={style.nav}>
//         <ul className="text-secondary">
//           <li>HOME</li>
//           <li>EDUCATION</li>
//           <li>WORK EXPERIENCE</li>
//           <li>CONTACT</li>
//         </ul>
//       </nav>
//     </div>
//   )
