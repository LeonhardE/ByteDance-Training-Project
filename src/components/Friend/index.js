import 'antd/dist/antd.css'
import React from "react"
import { Drawer, Form, Button, Col, Row, Select, Space } from 'antd'
import './card.css'
const loveIcon =
    <svg t="1632615859159" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7898" width="32" height="32">
        <path d="M942.9 485.3c-6.9-61.3-38.8-116-85.3-146.2-40.1-26-88.1-32.1-135-17.2-37.2 11.8-66.8 34-86.9 64.7 3.2-14.5 6.9-35.3 5.4-46.9-2.5-19.1-18.6-33.4-37.2-27.1-18.5 6.3-18.6 25-18.6 25s-17.7-6.1-29.7 9.4c-5.9 7.6-6.9 16.2-4.4 24-16.9-2-32.5-1.5-45.8 0.1-17 2-31.9 6-43.6 10-4.6-11.5-11.3-25.4-20.8-39.6-21.6-32.3-62.4-73-134-82.9-57.7-8-112.3 8.7-153.8 47-48.3 44.6-74.6 115.1-70.4 188.4C90 617.4 210.2 867.7 215.3 878.3c4.2 8.8 13.1 14.1 22.5 14.1 2.1 0 4.3-0.3 6.4-0.8 8.3-2.2 198.7-52.8 318-112.8C665 817.3 853.8 834.3 862.6 835c0.7 0.1 1.5 0.1 2.2 0.1 11.1 0 20.9-7.3 24-18.1 2.7-9.3 65.5-229.8 54.1-331.7z m-810.2 5.8c-3.4-58.5 17-114.1 54.5-148.8 30.7-28.4 69.8-40.2 113-34.2 42.1 5.8 75.2 25.9 98.3 59.7 17.6 25.7 23 50.5 23.2 51.8 1.5 8 6.7 14.6 14 18 7.4 3.4 15.9 3 23-1.1 0.8-0.4 72-40.1 142.9 4.4-7.1-0.5-14.8-0.7-23.1-0.3-47.1 2.4-88 23.7-118.2 61.4-30.8 38.4-42.3 85.4-32.4 132.2 9.5 44.9 38.2 86.4 78.7 115.5-90.7 40.3-208.7 75-255.1 88-28-60.4-113.2-251.3-118.8-346.6z m713.6 292.1c-54.1-5.7-200.5-23.5-274.7-54.3-0.7-0.3-1.4-0.6-2.2-0.9-4.5-1.9-8.8-3.9-12.7-6-41.6-21.6-71.5-58.3-79.9-98.1-6.8-32.3 1-63.6 22.5-90.6 28.1-35 62.8-43 88.5-43 20.1 0 34.7 4.8 36.4 5.5 7.6 2.8 16 1.8 22.7-2.8 6.7-4.6 10.7-12.2 10.8-20.3 0-0.8 2.3-78.4 79.9-103 32.9-10.5 64.9-6.5 92.6 11.5 34.1 22.1 57.6 63.2 62.9 109.8 8.6 75.5-31.7 235.8-46.8 292.2z" p-id="7899" fill="#bfbfbf"></path><path d="M507.6 278.7c15.8-11 21.1-31.8 7.1-45.5-14.1-13.6-30.7-5-30.7-5s-2.7-18.5-21.9-22.1c-19.3-3.5-33.2 12.9-32.9 32.2 0.3 19.3 18.2 61 18.2 61s44.3-9.7 60.2-20.6zM569.1 190.4c17.3 8.6 62.6 11.8 62.6 11.8s11.8-43.9 9.3-63-18.6-33.4-37.2-27.1-18.6 25-18.6 25-17.7-6.1-29.7 9.4-3.6 35.4 13.6 43.9z" p-id="7900" fill="#bfbfbf">
        </path>
    </svg>

const { Option } = Select

class Friend extends React.Component {
    constructor() {
        super()
        this.state = {
            // 性别：0代表未选择，1代表男，2代表女
            gender: "0",
            // 年龄：0代表未选择，1代表20-25，2代表25-30，3代表30-40，4代表40-50
            age: "0",
            // 推荐人名
            candidateNames: [],
            // 推荐人照片
            candidatePhotos: [],
            // 推荐人介绍
            candidateInfo: [],
            // 抽屉可见
            visiable: false
        }
    }

    componentDidMount() {
        // 从后端获取默认推荐人信息
        // 后端接口Todo
        fetch('http://localhost:5000/retriveInfo')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                candidateNames: data.data.retrived_names,
                candidatePhotos: data.data.retrived_photos,
                candidateInfo: data.data.retrived_info
            })
            console.log(this.state)
        })
    }

    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
 
    onGenderChange = (value) => {
        // 设置性别
        this.setState({
            gender: value
        })
    }

    onAgeChange = (value) => {
        // 设置年龄
        this.setState({
            age: value
        })
    }

    handleUpdate = () => {
        // 点击提交按钮更新推荐人信息
        console.log(this.state.gender)
        console.log(this.state.age)
        var data = {
          'gender': this.state.gender,
          'age': this.state.age
        }
        // 这里是空的
        fetch("http://localhost:5000/setproperty", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            //contentType: false,
            processData: false,
            body: JSON.stringify(data),
        })
        .then(res => res.text())
        .catch(error => console.error('Error: ', error))
        .then(response => {
            console.log('Success: ', response)
            fetch('http://localhost:5000/retriveInfo')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    candidateNames: data.data.retrived_names,
                    candidatePhotos: data.data.retrived_photos,
                    candidateInfo: data.data.retrived_info
                })
                console.log(this.state)
            })
            alert("提交成功！")
        })
    }

    render() {
        const { candidateNames, candidatePhotos, candidateInfo } = this.state
        return (
          <>
            <div onClick={this.showDrawer}>
              {loveIcon}
            </div>
            <Drawer
              title="单身程序员自救平台"
              width={720}
              onClose={this.onClose}
              visible={this.state.visible}
              bodyStyle={{ paddingBottom: 80 }}
              extra={
                <Space>
                  <Button onClick={this.onClose}>Cancel</Button>
                </Space>
              }
            >
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="性别"
                      label="性别"
                      rules={[{ required: true, message: '请选择您的性别' }]}
                    >
                      <Select 
                        placeholder="请选择您的性别"
                        onChange={this.onGenderChange}
                      >
                        <Option value="1">男性</Option>
                        <Option value="2">女性</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="年龄"
                      label="年龄"
                      rules={[{ required: true, message: '请选择您的年龄段' }]}
                    >
                      <Select 
                        placeholder="请选择您的年龄段"
                        onChange={this.onAgeChange}
                      >
                        <Option value="1">20-25岁</Option>
                        <Option value="2">25-30岁</Option>
                        <Option value="3">30-40岁</Option>
                        <Option value="4">40-50岁</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                    <Button onClick={this.handleUpdate} type="primary">
                        Submit
                    </Button>
                    
                </Row>
                <div>
                <div class="main">
        <div class="con">
            <form action="">
                <div class="clear">
                </div>
                <div class="mp">
                    <div class="rwbg">
                    <img alt="photo1" src={candidatePhotos[0]}></img>
                    </div>
                    <p class="mz">姓名:{candidateNames[0]}</p>
                    <div class="nl">介绍:{candidateInfo[0]}</div>
                </div>
                <div class="mp r">
                    <div class="rwbg">
                    <img alt="photo2" src={candidatePhotos[1]}></img>
                    </div>
                    <p class="mz">姓名:{candidateNames[1]}</p>
                    <div class="nl">介绍:{candidateInfo[1]}</div>
                </div>
                <div class="mp">
                    <div class="rwbg">
                    <img alt="photo3" src={candidatePhotos[2]}></img>
                    </div>
                    <p class="mz">姓名:{candidateNames[2]}</p>
                    <div class="nl">介绍:{candidateInfo[2]}</div>
                </div>
                <div class="mp r">
                    <div class="rwbg">
                    <img alt="photo4" src={candidatePhotos[3]}></img>
                    </div>
                    <p class="mz">姓名:{candidateNames[3]}</p>
                    <div class="nl">介绍:{candidateInfo[3]}</div>
                </div>
                <div class="clear"></div>
            </form>
        </div>
    </div>
                </div>
              </Form>
            </Drawer>
          </>
        );
    }

}

export default Friend
