/*
 * @Author: your name
 * @Date: 2020-09-22 19:00:57
 * @LastEditTime: 2020-09-23 15:34:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Home\banner\index.js
 */
import React from "react";
import style from "./index.module.scss";
import { connect } from "react-redux";

function Banner(props) {
  return (
    <div className="container-fluid">
      <div className={style.banner}>
        <h2
          id={style.welcome}
          className="text-center"
          style={{
            paddingBottom: props.scrollValue.scrollPosition * 2,
          }}
        >
          Welcome To My Website
        </h2>
        <div className={style.clouds}>
          <img src="assets/banner/cloud1.png" alt="" />
          <img src="assets/banner/cloud2.png" alt="" />
          <img src="assets/banner/cloud3.png" alt="" />
          <img src="assets/banner/cloud4.png" alt="" />
          <img src="assets/banner/cloud5.png" alt="" />
          <img src="assets/banner/cloud1.png" alt="" />
          <img src="assets/banner/cloud2.png" alt="" />
          <img src="assets/banner/cloud3.png" alt="" />
          <img src="assets/banner/cloud4.png" alt="" />
          <img src="assets/banner/cloud5.png" alt="" />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    scrollValue: state.scrollPosition,
  };
};
export default connect(mapStateToProps)(Banner);
