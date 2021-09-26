import './index.css';
import { Input,Button } from 'antd';
import './emo.js';
import { Component } from 'react';
import PubSub from 'pubsub-js';

class Board extends Component  {

    constructor(props) {
        super(props)
        this.state = {
            situation: "",
            content:"",
        }
    }
    //接收订阅消息
    componentDidMount() {
        PubSub.subscribe('situation',(_,data) =>{
            this.setState(
                {
                    situation:data
                }
            )
            console.log(this.state.situation)
        })
    }

    handleMaxRestoreUp = (event)=>{
        if(event && event.target || event.target.value){
          let value = event.target.value;
          this.setState(()=>({content:value }))
        }
      }

    //发布留言
    sendMessage = (event) => {
        if(event && event.target || event.target.value) {
            event.target.value = "";
        }
    }

    render(){
    return (
        
        <div id="board-contain">
            <div id="board-head">
                <span>不要辜负每一行代码！</span>
            </div>
            <div id="board-body">
                {this.state.situation}: {this.state.content}
            </div>
            <div id="input-contain">
                <div id="situation">
                   {this.state.situation}
                </div>
                <Input placeholder="留下些什么吧..." id="input" onChange ={event => this.handleMaxRestoreUp(event)}  onPressEnter={event => this.sendMessage(event)} />
                <Button type="primary" id="send-button" onClick = {Input.onPressEnter}>发送</Button>
            </div>
        </div>
      
    )
    }
  }

  export default Board