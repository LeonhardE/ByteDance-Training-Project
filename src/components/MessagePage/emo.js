import './index.css';
import React from "react";
import { Component } from 'react'
import { Button } from 'antd';
import PubSub from 'pubsub-js';
import 'antd/dist/antd.css'; 
import fishing from '../../img/fishing.png';
import learn from '../../img/learn.png';
import work from '../../img/work.png';
import game from '../../img/game.png';
import shopping from '../../img/shopping.png';
import tv from '../../img/tv.png';
import sleep from '../../img/sleep.png';


class EmoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            situation: "",
        }
    }
    //发布订阅
    pushEmo = () => {
        const emo = this.state.situation;
        PubSub.publish('situation', emo);
        console.log(emo);
    }
 
    choice1 = () => {
        this.setState({ situation:"摸鱼ing" });
        setTimeout (()=> {//setimeout 解决setState非异步的本体
            this.pushEmo();
            console.log(this.state.situation)
        },100)
        
    }
    choice2 = () => {
        this.setState({ situation:"学习ing" });
        setTimeout (()=> {
            this.pushEmo();
            console.log(this.state.situation)
        },100)
    }
    choice3 = () => {
        this.setState({ situation:"打工ing" });
        setTimeout (()=> {
            this.pushEmo();
            console.log(this.state.situation)
        },100)
    }
    choice4 = () => {
        this.setState({ situation:"游戏ing" });
        setTimeout (()=> {
            this.pushEmo();
            console.log(this.state.situation)
        },100)
    }
    choice5 = () => {
        this.setState({ situation:"网购ing" });
        setTimeout (()=> {
            this.pushEmo();
            console.log(this.state.situation)
        },100)
    }
    choice6 = () => {
        this.setState({ situation:"煲剧ing" });
        setTimeout (()=> {
            this.pushEmo();
            console.log(this.state.situation)
        },100)
    }
    choice7 = () => {
        this.setState({ situation:"睡觉ing" });
        setTimeout (()=> {
            this.pushEmo();
            console.log(this.state.situation)
        },100)
    }


    render() {
        // Todo 
        const {candidateNames, candidatePhotos, candidateInfo} = this.state;

        return (
            <div id="emo-contain">
                <div id="left-side-contain">
                    <div id="emo-title">
                        <span>pick一个你目前的状态吧~</span>
                    </div>
                    <div id="left-side">
                        <Button type="dashed" id="button" onClick={ this.choice1 }>
                            <img src={fishing} alt="摸鱼中" id="fishing"/>
                            摸鱼中
                        </Button>
                        <Button type="dashed" id="button" onClick={ this.choice2 }>
                            <img src={learn} alt="学习中" id="fishing" style={{marginRight: 5 + 'px'}} />
                            学习中
                        </Button>
                        <Button type="dashed" id="button" onClick={ this.choice3 }>
                            <img src={work} alt="打工中" id="fishing"/>
                            打工中
                        </Button>
                        <Button type="dashed" id="button" onClick={ this.choice4 }>
                            <img src={game} alt="游戏中" id="fishing" style={{marginRight: 5 + 'px'}} />
                            游戏中
                        </Button>
                        <Button type="dashed" id="button" onClick={ this.choice5 }>
                            <img src={shopping} alt="网购中" id="fishing"/>
                            网购中
                        </Button>
                        <Button type="dashed" id="button" onClick={ this.choice6 }>
                            <img src={tv} alt="煲剧中" id="fishing" style={{width: 2 + 'em'},{marginRight: 5 + 'px'}} />
                            煲剧中
                        </Button>
                        <Button type="dashed" id="button" onClick={ this.choice7 }>
                            <img src={sleep} alt="睡觉中" id="fishing" style={{marginBottom: 5 + 'px'}} />
                            睡觉中
                        </Button>
                        
                    </div>
                </div>
                {/* <div>
                    <span>当前状态：</span>
                    <img src={this.state.picture} />{ this.state.situation }
                </div> */}
                <div>
                    
                </div>
            </div>

        )
    }

}

export default EmoList