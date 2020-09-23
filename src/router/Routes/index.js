/*
 * @Author: your name
 * @Date: 2020-09-23 16:16:43
 * @LastEditTime: 2020-09-23 18:23:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\router\index.js
 */
import React from 'react'
import Home from '../../components/Home'
import Exp from '../../components/Exp'
import { Route } from 'react-router-dom'

export default function Routes() {
    return (
        <>
            <Route exact path="/home" component={Home} />
            <Route exact path="/portfolio" component={Exp} />
            <Route exact path="/education" component={Exp} />
            <Route exact path="/experience" component={Exp} />
            <Route exact path="/contact" component={Exp} />
        </>
    )
}
