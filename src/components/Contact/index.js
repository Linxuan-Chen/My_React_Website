/*
 * @Author: your name
 * @Date: 2020-09-27 17:23:34
 * @LastEditTime: 2020-11-10 13:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Contact\index.js
 */
import React, { useEffect } from "react";
import style from "./index.module.scss";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.background}>
      <div className="container-fluid">
        <header className={style.header + " text-center pt-5"}>Contact</header>
        <footer className="h5 text-center">
          If you are interested in me, please don't hesitate to contact me!
        </footer>
      </div>
      <div className="container">
        {/* Concordia university media starts */}
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/contact/phone.png"
              alt="phone logo"
            />
            <div className="media-body text-center pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>Cell Phone</h2>
                </div>
                <div className="col-12">
                  <h5>514 - (663) 8404</h5>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={style.dividing_line}></div>
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/contact/gmail.png"
              alt="Concordia Logo"
            />
            <div className="media-body text-center pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>Email</h2>
                </div>
                <div className="col-12">
                  <h5 className="d-none d-lg-block">
                    linxuanchen2017@gmail.com
                  </h5>
                  <h5 className="d-lg-none">linxuanchen2017 @gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={style.dividing_line}></div>
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/contact/github.png"
              alt="GitHub Logo"
            />
            <div className="media-body text-center pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>GitHub</h2>
                </div>
                <div className="col-12">
                  <h5 className="d-none d-lg-block">
                    <a
                      href="https://github.com/Linxuan-Chen"
                      className="text-info"
                    >
                      https://github.com/Linxuan-Chen
                    </a>
                  </h5>
                  <h5 className="d-lg-none">
                    <a
                      href="https://github.com/Linxuan-Chen"
                      className="text-info"
                    >
                      https://github.com/ Linxuan-Chen
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={style.dividing_line}></div>
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/contact/linkedIn.png"
              alt="Concordia Logo"
            />
            <div className="media-body text-center pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>LinkedIn</h2>
                </div>
                <div className="col-12">
                  <h5 className="d-none d-lg-block">
                    <a
                      href="https://www.linkedin.com/in/chen-linxuan-120053187/"
                      className="text-info"
                    >
                      https://www.linkedin.com/in/chen-linxuan-120053187/
                    </a>
                  </h5>
                  <h5 className="d-lg-none">
                    <a
                      href="https://www.linkedin.com/in/chen-linxuan-120053187/"
                      className="text-info"
                    >
                      https:// www.linkedin.com/ in/ chen-linxuan-120053187/
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={style.dividing_line}></div>
        <article className={style.articles}>
          <div className={style.media_img + " media mt-3"}>
            <img
              className="align-self-center"
              src="assets/contact/resume.png"
              alt="GitHub Logo"
            />
            <div className="media-body text-center pl-5 pt-3">
              <div className="row">
                <div className="col-12">
                  <h2>Resume</h2>
                </div>
                <div className="col-12">
                  <a
                    href="https://github.com/Linxuan-Chen/My_React_Website/raw/gh-pages/assets/resume/RESUME.pdf"
                    className="text-info"
                  >
                    <h5>Click Here To Download My Resume!</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={style.dividing_line}></div>
      </div>
    </div>
  );
}
