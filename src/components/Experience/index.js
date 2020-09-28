/*
 * @Author: your name
 * @Date: 2020-09-23 16:10:35
 * @LastEditTime: 2020-09-28 13:26:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Experience\index.js
 */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

function Experience(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid">
      <div className={style.background}>
        <div className={style.mask}></div>
        <div className={style.wrapper + " container"}>
          <header className={style.header + " text-center"}>
            <p className="pt-5">Experience</p>
          </header>
          {/* 1st experience */}
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center">
              <section>
                <h4>time</h4>
                <h3>To be continued</h3>
                <p>Maybe we can reach the summit together!</p>
              </section>
            </div>
          </div>
          {/* 2nd experience */}
          <div className="row">
            <div className="col-5 text-center">
              <NavLink to="/education" className={style.nav_link}>
                <h4>time</h4>
                <h3>Got Master Degree In Concordia University</h3>
                <p>Maybe we can reach the summit together!</p>
              </NavLink>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5"></div>
          </div>
          {/* 3rd experience */}
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center">
              <section>
                <h4>time</h4>
                <h3>ALIBABA GROUP</h3>
                <h5>Nanjing, China</h5>
                <p>Maybe we can reach the summit together!</p>
              </section>
            </div>
          </div>
          {/* 4th experience */}
          <div className="row">
            <div className="col-5 text-center">
              <NavLink to="/education" className={style.nav_link}>
                <h4>time</h4>
                <h3>
                  Got Bachelor Degree In Nanjing University of Science and
                  Technology
                </h3>
                <p>Maybe we can reach the summit together!</p>
              </NavLink>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5"></div>
          </div>
          {/* 5th experience */}
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center">
              <section>
                <h4>time</h4>
                <h3>Thought Works</h3>
                <h5>Shanghai, China</h5>
                <p>Maybe we can reach the summit together!</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
