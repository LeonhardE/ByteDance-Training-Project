import './index.css';
import Board from './board';
import EmoList from './emo';
import { Component } from 'react';
import FriendLink from './link';


class MessagePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        situation: "",
    }
  } 

    render() {
      return (
        <div id="board-container">
            <div id="board-title">
                <span id="title">码的都对留言板</span>
            </div>
            <EmoList />
            <Board />
            <FriendLink />
        </div>
      )
      }
  }

  export default MessagePage