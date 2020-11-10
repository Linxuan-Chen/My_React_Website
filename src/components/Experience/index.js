/*
 * @Author: your name
 * @Date: 2020-09-23 16:10:35
 * @LastEditTime: 2020-11-10 13:09:15
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
                  <h5>Maybe we can reach the summit together!</h5>
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
                <i>
                  Alibaba is the world's largest retailer and e-commerce
                  company, and on the list of largest Internet companies. Its
                  three main sites Taobao, Tmall and Alibaba.com have hundreds
                  of millions of users, and host millions of merchants and
                  businesses. Its online sales and profits have surpassed all US
                  retailers (including Walmart, Amazon, and eBay) combined since
                  2015.
                </i>
              </section>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center pt-5">
              <ul>
                <li className="text-left">
                  <h5>Improving UI/UX of Taobao BI analyser tool</h5>
                  <p>
                    <i>
                      A website product aimed at merchants on Taobao ecommerce
                      platform providing a visualized method to reach Alibaba’s
                      existed cloud and data analysis products. It’s a joint
                      between merchants and elusive BI reports.
                    </i>
                  </p>
                </li>
                <li className="text-left">
                  <h5>Completed UI of ONENESS Platform</h5>
                  <p>
                    <i>
                      An internal platform provides connection to most Alibaba’s
                      data product interfaces to assists developers in fetching
                      results from Alibaba’s data products or Cloud services.
                    </i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* 3rd experience */}
          <div className="row">
            <div className="col-5 text-center pt-5">
              <section className="pb-5">
                <h5>02/2016 - 03/2017</h5>
                <h3>Thought Works</h3>
                <p>Shanghai, China</p>
                <h5>Front-End Developer (Intern)</h5>
                <i>
                  ThoughtWorks is a global technology company who provides
                  software design and delivery, and tools and consulting
                  services.
                </i>
              </section>
            </div>
            <div className="col-2">
              <div className={style.line}></div>
            </div>
            <div className="col-5 text-center pt-5">
              <ul>
                <li className="text-left">
                  <h5>
                    Provided front end development for Community Residents
                    Management System utilizing React.
                  </h5>
                  <i>
                    A product based on website to offer property management
                    companies an easier way to administrate the community. It
                    offers portals for residents to upload personal information
                    and to provide feedbacks as well as visualized backstage
                    interfaces for administrators to read feedbacks and to post
                    notifications.
                  </i>
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
