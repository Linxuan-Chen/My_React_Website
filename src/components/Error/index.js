/*
 * @Author: your name
 * @Date: 2020-09-25 17:26:35
 * @LastEditTime: 2020-09-27 17:23:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\components\Error\index.js
 */
import React, { useEffect } from "react";

export default function Error() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container-fluid text-center text-dark pt-5">
      <h1>The Page Is Not Found... Please Check The ULR Again.</h1>
    </div>
  );
}
