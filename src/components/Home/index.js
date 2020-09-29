/*
 * @Author: your name
 * @Date: 2020-09-22 20:38:05
 * @LastEditTime: 2020-09-29 16:10:20
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
          <h1 className="text-danger text-center pt-3">BRIEF INTRODUCTION </h1>
          <ul className={style.introduction}>
            <li className="h3">
              Recent graduate of Concordia University’s Master of Electrical and
              Computer Engineering program with hands-on experience in front end
              development.
            </li>
            <li className="h3">
              Adept at developing reusable UI components utilizing a variety of
              tools and environments.
            </li>
            <li className="h3">
              Experienced in general application maintenance.
            </li>
            <li className="h3">
              Proven ability to utilize on cutting-edge industry technology and
              methodologies.
            </li>
          </ul>
          <h1 className="text-danger text-center">PROFESSIONAL SKILLS</h1>
          <div className="row">
            <div className="col-2 text-center h5">HTML</div>
            <div className="col-10 pt-1">
              <ProgressBar
                striped
                animated
                now={90}
                label={"90%"}
                variant="success"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center h5">CSS/Sass/Bootstrap</div>
            <div className="col-10 pt-1">
              <ProgressBar
                striped
                animated
                now={90}
                label={"90%"}
                variant="success"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center h5">JavaScrip(ES6)</div>
            <div className="col-10 pt-1">
              <ProgressBar
                striped
                animated
                now={85}
                label={"85%"}
                variant="success"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center h5">
              React(With hooks and its naissance)
            </div>
            <div className="col-10 pt-4">
              <ProgressBar
                striped
                animated
                now={85}
                label={"85%"}
                variant="success"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center h5">
              Other Front-End Skills (Including redux, jQuery, vue, Ajax, JSON,
              Git, SEO, Ant-Design, Vs Code, Photoshop)
            </div>
            <div className="col-10 pt-5">
              <ProgressBar
                striped
                animated
                now={80}
                label={"80%"}
                variant="success"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center h5">Node.js</div>
            <div className="col-10 pt-1">
              <ProgressBar
                striped
                animated
                now={75}
                label={"75%"}
                variant="success"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center h5">mySQL</div>
            <div className="col-10 pt-1 mb-5">
              <ProgressBar
                striped
                animated
                now={80}
                label={"80%"}
                variant="success"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
