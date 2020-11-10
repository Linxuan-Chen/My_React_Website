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
            <div className="media-body text-left pl-4 pt-3">
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
                Prototyped smart parking system using ARM microprocessor which
                is a real model composed with ARM microprocessor, RFID system,
                laser sensors, LED screens and motors. It uses RFID system to
                inquiry users’ account, microprocessor to find the best slot, to
                check the account status and to control LED screen and motors.
              </li>
              <li>
                Experience with building responsive website with frameworks like
                bootstrap or with CSS media query to enhance mobile user’s
                experience.{" "}
              </li>
              <li>
                Completed some open source projects on my own on GitHub. All of
                them are responsive and are friendly to mobile users.
                <ul className={style.sublist}>
                  <li className="justify-content-between">
                    Rebuilt the homepage of Eduwork institution using React,
                    React-Router, Redux, Bootstrap, Sass and DPlayer.
                    <a
                      className="pl-3 text-info"
                      href="https://linxuan-chen.github.io/EduWork/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEMO
                    </a>
                  </li>
                  <li>
                    Constructed my personal website using React, React-Router,
                    Bootstrap, React-Bootstrap, Module CSS, Sass and Swiper.js.
                    <a
                      className="pl-3 text-info"
                      href="https://linxuan-chen.github.io/My_React_Website/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEMO
                    </a>
                  </li>
                  <li>
                    Completed a demo of to do list using React, React-Router,
                    Redux and Sass.
                    <a
                      className="pl-3 text-info"
                      href="https://linxuan-chen.github.io/To-Do-List/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEMO
                    </a>
                  </li>
                </ul>
              </li>
              <li>Built filter for denoising ultrasound images by MATLAB.</li>
              <li className="pb-3">
                Developed a system for tracking specific targets in videos using
                MATLAB.
              </li>
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
            <div className="media-body text-left pl-4 pt-3">
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
