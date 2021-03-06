/*
 * @Author: your name
 * @Date: 2020-09-27 17:21:28
 * @LastEditTime: 2020-11-10 14:14:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Portfolio\index.js
 */
import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import style from "./index.module.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.wrapper + " container-fluid"}>
      <div className="container">
        <div className={style.innerWrapper}>
          <header className="h1 text-center pt-5">PORTFOLIO</header>
          <h4 className="text-center">
            My Latest Work. Swipe To Discover More.
          </h4>
          <h4 className="text-center">Visit My GitHub On</h4>
          <h4 className="text-center">
            <a href="https://github.com/Linxuan-Chen">
              https://github.com/Linxuan-Chen
            </a>
          </h4>
          {/* carousel starts */}
          <div className="row">
            <div className="col">
              <Swiper
                className={style.carousel}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >

                <SwiperSlide>
                  <a
                    href="https://linxuan-chen.github.io/EduWork/"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <h3 className="text-center pt-5">
                      Remade Homepage of Eduwork Institution
                      </h3>
                  </a>

                  <div className="row">
                    <div className="col text-center">
                      <img
                        className={style.img}
                        src="assets/portfolio/Eduwork.png"
                        alt="Eduwork website snapshot"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="https://linxuan-chen.github.io/To-Do-List/"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <h3 className="text-center pt-5">
                      A Simple To-Do-List With Multiple Functions
                      </h3>
                  </a>

                  <div className="row">
                    <div className="col text-center">
                      <img
                        className={style.img}
                        src="assets/portfolio/To-Do-List.png"
                        alt="To Do List Snapshot"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.last_slide}>
                  <img
                    src="assets/portfolio/To-Be-Continued.png"
                    alt="To be continued"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
