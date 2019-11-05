import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="big">
                <div className="header">
                    <Link to='/home'>首页</Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;登录
                </div>
                <div className="denglu">
                    用户名<input type="text" />
                    <br/>
                    密码 &nbsp;&nbsp;<input type="text"/>
                    <br/>
                    {/* 点击登录 跳转到首页 */}
                    <button><Link to='/home'>登录</Link></button> 
                </div>
            </div>
        )
    }
}
