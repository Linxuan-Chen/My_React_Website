/*
 * @Author: your name
 * @Date: 2020-09-23 13:06:27
 * @LastEditTime: 2020-09-23 14:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\reducers\index.js
 */
import scrollPosition from "./scrollPostion"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    scrollPosition,
});

export default rootReducer