import React, { useEffect } from "react";
import style from "./index.module.scss";

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.background}>
      <div className="container-fluid">
        <header className={style.header + " text-center pt-5"}>
          EDUCATION
        </header>
      </div>
      <div className="container">
        {/* Concordia university media starts */}
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/education/concordia_logo.png"
              alt="Concordia Logo"
            />
            <div className="media-body text-left pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>Master Of Engineering</h2>
                  <h3>Concordia University</h3>
                  <h5>Montreal, Quebec, Canada</h5>
                </div>
                <div className="col-12">
                  <h3>Electrical And Computer Engineering</h3>
                </div>
                <div className="col-12">
                  <h5 className="text-muted">2017 - 2020</h5>
                </div>
              </div>
            </div>
          </div>
          <section className="col-12">
            <h2 className="text-center">COURSES</h2>
            <p>
              Acquired and applied knowledge of current and emerging high-level
              software development practices, including system control
              (optimization techniques, large system control, real time system
              control, robotics), signal processing (digital signal processing,
              medical image processing, digital video processing), and
              microprocessing.
            </p>
          </section>
          <section className="col-12">
            <h2 className="text-center">PROJECTS</h2>
            <ul>
              <li>
                Prototyped smart parking system using ARM microprocessor in team
                of 4.
              </li>
              <li>Built filter for denoising ultrasound images. </li>
              <li>Developed specific object tracking system. </li>
            </ul>
          </section>
        </article>
        <div className={style.dividing_line}></div>
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/education/NUST.png"
              alt="Concordia Logo"
            />
            <div className="media-body text-left pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>Bachelor Of Engineering</h2>
                </div>
                <div className="col-12">
                  <h3>Nanjing University of Science and Technology</h3>
                  <h5>Nanjing, Jiangsu Province, China</h5>
                  <h3>Electrical Engineering And Automation</h3>
                </div>
                <div className="col-12">
                  <h5 className="text-muted">2012 - 2016</h5>
                </div>
              </div>
            </div>
          </div>
          <section className="col-12">
            <h2 className="text-center">COURSES</h2>
            <p>
              Aquired knowledge of general programming and front-end essential
              skills.
            </p>
          </section>
          <section className="col-12">
            <h2 className="text-center">PROJECTS</h2>
            <ul>
              <li>Built a stereo parking system utilizing PLC.</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
