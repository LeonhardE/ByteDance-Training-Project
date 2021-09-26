import './index.css';
import { Component } from 'react';
import { Card, Col, Row } from 'antd';
import bili from '../../img/bili.png';
import music from '../../img/music.png';
import logo from '../../img/logo.png';
import code from '../../img/code.png';
import { width } from 'dom-helpers';

  
const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  
class FriendLink extends Component {
    render() {
        return (
            <div id="link-list-contain">
                <Card  bodyStyle={
                    {height: 5 + 'vw'},
                    {marginTop: 15 + 'px'},
                    {backgroundColor: 'aliceblue'}
                    
                }>
                    <Card.Grid style={gridStyle}>
                        <img src={code} alt="coder"  id="icon" />
                        <a href="../ResourcePage">开发者资源区</a>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                    <img src={logo} alt="home"  id="icon" />
                        <a href="../">首页</a>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <img src={bili} alt="bilibili"  id="icon" />
                        <a href="http://www.bilibili.com">看点东西</a>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <img src={music} alt="music_cloud"  id="icon2" />
                        <a href="https://music.163.com/">come some music</a>
                    </Card.Grid>
                </Card>
            </div>
        )
}
}

export default FriendLink