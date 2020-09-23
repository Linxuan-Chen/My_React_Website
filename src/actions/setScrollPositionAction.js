/*
 * @Author: your name
 * @Date: 2020-09-23 13:08:03
 * @LastEditTime: 2020-09-23 14:10:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\actions\setScrollPosition.js
 */
const setScrollPositionAction = (value) => {
    return {
        type: "setScrollPosition",
        value: value
    }
}
export default setScrollPositionAction