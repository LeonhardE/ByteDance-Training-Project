import React, { Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import PubSub from 'pubsub-js'
import {nanoid} from 'nanoid'
import { Input } from 'antd';
const { TextArea } = Input;


export default class Comments extends Component {

    addComments = () =>{
        const content = this.comment.value
        console.log(content);
        const comment = {id:nanoid(),content}
        //发布消息
        PubSub.publish('comments', comment)
    }

    render() {
        // const onChange = e => {
        //     if 
        //     console.log('Change:', e.target.value);
        // };

        return (
            <div>
                <div>
                    <TextArea ref = {c => this.comment = c} type="text"  showCount maxLength={100}  />
                    {/* <input ref = {c => this.comment = c}type="text" /> */}
                    <button onClick = {this.addComments}>send</button>
                </div>
            </div>
        )
    }
}
