import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import stringHtml from './about-markdown.js';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Link to='/home'>首页</Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;关于
                </div>
                <div className="inner topic">
                    <div className="topic-content" dangerouslySetInnerHTML={{__html: stringHtml}}>
                    </div>
                </div>
            </div>
        )
    }
}
