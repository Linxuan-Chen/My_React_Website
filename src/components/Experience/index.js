/*
 * @Author: your name
 * @Date: 2020-09-23 16:10:35
 * @LastEditTime: 2020-09-29 15:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Experience\index.js
 */
import React, { useEffect } from "react";
import style from "./index.module.scss";

function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid">
      <div className={style.background}>
        <div className={style.mask}></div>
        <div className={style.wrapper + " container"}>
          <header className={style.header + " text-center"}>
            <p className="pt-5">EXPERIENCE</p>
          </header>
          {/* 1st experience */}
          <div className="row">
            <div className="col-5 text-center pt-5">
              <section>
                <h4>To be continued ...</h4>
              </section>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center pt-5">
              <ul>
                <li className="text-left">
                  Maybe we can reach the summit together!
                </li>
              </ul>
            </div>
          </div>
          {/* 2nd experience */}
          <div className="row">
            <div className="col-5 text-center pt-5">
              <section>
                <h5>05/2019 - 06/2020</h5>
                <h3>ALIBABA GROUP</h3>
                <p>Nanjing, China</p>
                <h5>Front-End Developer (Intern)</h5>
              </section>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center pt-5">
              <ul>
                <li className="text-left">
                  Built reusable UI components in agile environment that display
                  data and views of backstage management system to assist in
                  development of Business Advisor project and provided general
                  application maintenance.
                </li>
                <li className="text-left">
                  Completed Oneness platform project which provides connection
                  to most company data product interfaces and assists
                  developers.
                </li>
                <li className="text-left">
                  Adapted to company toolset, quickly and efficiently learning
                  all unique frameworks and concepts.
                </li>
              </ul>
            </div>
          </div>
          {/* 3rd experience */}
          <div className="row">
            <div className="col-5 text-center pt-5">
              <section>
                <h5>02/2016 - 03/2017</h5>
                <h3>Thought Works</h3>
                <p>Shanghai, China</p>
                <h5>Front-End Developer (Intern)</h5>
              </section>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center pt-5">
              <ul>
                <li className="text-left">
                  Provided front end development for Community Personnel
                  Management System, utilizing React and Redux. Built routers
                  and reusable UI components. Used Redux to store states.
                </li>
                <li className="text-left">
                  Adapted to company toolset, quickly and efficiently learning
                  all unique frameworks and concepts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
