/*
 * @Author: your name
 * @Date: 2020-09-23 13:16:07
 * @LastEditTime: 2020-09-23 13:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\store\index.js
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store