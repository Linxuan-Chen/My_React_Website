/*
 * @Author: your name
 * @Date: 2020-09-22 20:38:05
 * @LastEditTime: 2020-11-10 12:15:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Home\index.js
 */
import Banner from "./banner";
import React, { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import style from "./index.module.scss";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <div className={style.background}>
        <section className="container shadow-lg">
          <h2 className="text-center pt-3" style={
            {
              fontWeight: "bolder"
            }
          }>BRIEF INTRODUCTION </h2>
          <ul className={style.introduction}>
            <li className="h5">
              Master’s degree of Electrical and Computer Engineering program from Concordia University with over 2 years hands-on experience in front end development.
            </li>
            <li className="h5">
              Adept at developing reusable UI components utilizing a variety of
              tools and environments.
            </li>
            <li className="h5">
              Experienced in general application maintenance.
            </li>
            <li className="h5">
              Proven ability to utilize on cutting-edge industry technology and
              methodologies.
            </li>
          </ul>
          <h2 className="text-center">PROFESSIONAL SKILLS</h2>
          <div className="row">
            <div className="col-4 text-center h5">HTML5</div>
            <div className="col-8 pt-1">
              <ProgressBar
                striped
                animated
                now={90}
                label={"90%"}
                variant="secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center h5">CSS3 Sass Bootstrap4</div>
            <div className="col-8 pt-1">
              <ProgressBar
                striped
                animated
                now={90}
                label={"90%"}
                variant="secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center h5">JavaScript (ES6)</div>
            <div className="col-8 pt-1">
              <ProgressBar
                striped
                animated
                now={85}
                label={"85%"}
                variant="secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center h5">
              React (With hooks and its naissance)
            </div>
            <div className="col-8 pt-4">
              <ProgressBar
                striped
                animated
                now={85}
                label={"85%"}
                variant="secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center h5">
              Other Front-End Skills (Including redux, jQuery, vue, Ajax, JSON,
              Git, SEO, Ant-Design, Vs Code, Photoshop)
            </div>
            <div className="col-8 pt-5">
              <ProgressBar
                striped
                animated
                now={80}
                label={"80%"}
                variant="secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center h5">Node.js</div>
            <div className="col-8 pt-1">
              <ProgressBar
                striped
                animated
                now={75}
                label={"75%"}
                variant="secondary"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center h5">mySQL</div>
            <div className="col-8 pt-1 mb-5">
              <ProgressBar
                striped
                animated
                now={80}
                label={"80%"}
                variant="secondary"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
