import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class ShowBox extends Component {

    state = {comments:[{id:'001',content:'不会写代码'}]}

    componentDidMount(){
        PubSub.subscribe('comments',(_,data) =>{
            const {comments} = this.state
            const newComments = [data,...comments]  //前插入获取的新comment
            // console.log(newComments);
            this.setState({comments:newComments})
        })
    }

    
    render() {
        const {comments} = this.state
        return (
            <div>
                <div style = {{backgroundColor:'#d4d4c9'}}>
                    {
                        comments.map( comment => {
                            return <li key = {comment.id}>{comment.content}</li>
                        })
                    }
                </div>
            </div>
        )
    }
}
