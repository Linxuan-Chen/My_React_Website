/*
 * @Author: your name
 * @Date: 2020-09-23 12:46:41
 * @LastEditTime: 2020-09-23 15:18:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\reducers\scrollPostion.js
 */
import { setScrollPosition } from "../utils/constants"

const initState = {
    scrollPosition: 0
}

const scrollPosition = (state = initState, action) => {
    switch (action.type) {
        case setScrollPosition:
            return {
                scrollPosition: action.value
            }
        default: return state
    }

}

export default scrollPosition