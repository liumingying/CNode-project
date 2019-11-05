import React, { Component } from 'react'
import Header from './components/Header'

import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import {Link} from 'react-router-dom';
import Post from './container/post';
// import './container/home-index.less'


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/404" component={Home}></Route>
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                            <Route exact path="/tag/:type" component={Home}></Route>
                            {/* <Route exact path="/tag/:type" component={Home}></Route>
                            <Route exact path="/tag/:type" component={Home}></Route>
                            <Route exact path="/tag/:type" component={Home}></Route>
                            <Route exact path="/tag/:type" component={Home}></Route> */}
                            <Route exact path="/topic/:postId" component={Post}></Route>
                            {/* <Route render={() => ( <Redirect to="/404"></Redirect>)}/> */}
                        </div>
                        <div className="sider">
                            <div className="panell">
                                <p >CNode：Node.js专业中文社区</p>
                                <h5>您可以 登录 或 注册 , 也可以</h5>
                                <button><Link to='/login'>登录</Link></button>
                            </div>
                            <div className="panell">
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
                                <br/>
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                                <br/>
                                <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                            </div>
                            <div className="panell">
                                <div className="grey">
                                    <p>无人回复的话题</p>
                                </div>
                                <div className="characters">
                                    <p>Hackers周刊第十期（2019-11-03）</p>
                                    <p>写了个在测试中，控制函数日志打印的np...</p>
                                    <p>libuv的定时器原理源码解析</p>
                                    <p>nodejs之setTimeout源码解析</p>
                                    <p>libuv之async.c源码解析</p>
                                </div>
                            </div>
                            <div className="panell">
                            <div className="grey">
                                    <p>积分榜  TOP 100</p>
                                </div>
                                <div className="characters">
                                    <p>21745 &nbsp;&nbsp;&nbsp;&nbsp;i5ting</p>
                                    <p>15675 &nbsp;&nbsp;&nbsp;&nbsp;alsotang</p>
                                    <p>9350 &nbsp;&nbsp;&nbsp;&nbsp;leapon</p>
                                    <p>9115 &nbsp;&nbsp;&nbsp;&nbsp;atian25</p>
                                    <p>8780 &nbsp;&nbsp;&nbsp;&nbsp;jiyinyiyong</p>
                                    <p>7335 &nbsp;&nbsp;&nbsp;&nbsp;yakczh</p>
                                    <p>6825 &nbsp;&nbsp;&nbsp;&nbsp;im-here</p>
                                    <p>6095 &nbsp;&nbsp;&nbsp;&nbsp;DevinXian</p>
                                    <p>5815 &nbsp;&nbsp;&nbsp;&nbsp;chapgaga</p>
                                    <p>5350 &nbsp;&nbsp;&nbsp;&nbsp;magicdawn</p>
                                </div>
                            </div>
                            <div className="panell">
                            <div className="grey">
                                    <p>友情社区</p>
                                </div>
                                <div className="characters">
                                   <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                   <br/>
                                   <img src="//static2.cnodejs.org/public/images/golangtc-logo.png"></img>
                                   <br/>
                                   <img src="//static2.cnodejs.org/public/images/phphub-logo.png"></img>
                                   <br/>
                                   <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"></img>
                                   <br/>
                                </div>
                            </div>
                            <div className="panell">
                            <div className="grey">
                                    <p>客户二维码</p>
                                </div>
                                <div className="characters2">
                                    <img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                                    <p>客户端源码地址</p>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
