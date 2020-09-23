/*
 * @Author: your name
 * @Date: 2020-09-22 19:00:57
 * @LastEditTime: 2020-09-22 20:38:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Home\banner\index.js
 */
import React, { useEffect, useState } from "react";
import style from "./index.module.scss";

export default function Home() {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollHandler = () => {
    setScrollValue(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div>
      <div className={style.banner}>
        <h2
          id={style.welcome}
          style={{
            paddingBottom: scrollValue * 2,
          }}
        >
          Welcome To My Website
        </h2>
        <div className={style.clouds}>
          <img src="/assets/banner/cloud1.png" alt="" />
          <img src="/assets/banner/cloud2.png" alt="" />
          <img src="/assets/banner/cloud3.png" alt="" />
          <img src="/assets/banner/cloud4.png" alt="" />
          <img src="/assets/banner/cloud5.png" alt="" />
          <img src="/assets/banner/cloud1.png" alt="" />
          <img src="/assets/banner/cloud2.png" alt="" />
          <img src="/assets/banner/cloud3.png" alt="" />
          <img src="/assets/banner/cloud4.png" alt="" />
          <img src="/assets/banner/cloud5.png" alt="" />
        </div>
      </div>
    </div>
  );
}
