import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import stringHtml from './api-markdown.js';

export default class Api extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Link to='/home'>首页</Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;API
                </div>
                <div className="inner topic">
                    <div className="topic-content">
                        <div className="markdown-text" dangerouslySetInnerHTML={{__html: stringHtml}}>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
