/*
 * @Author: your name
 * @Date: 2020-09-23 16:16:43
 * @LastEditTime: 2020-09-26 10:45:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \repository\My_React_Website\src\router\index.js
 */
import React from 'react'
import Home from '../../components/Home'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Err from '../../components/Error'
import { Route, Switch } from 'react-router-dom'

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Experience} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/contact" component={Experience} />
                <Route component={Err}></Route>
            </Switch>
        </>
    )
}
