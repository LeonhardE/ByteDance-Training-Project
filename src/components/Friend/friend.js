import 'antd/dist/antd.css'
import React from "react"
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select

class Friend extends React.Component {
    constructor() {
        super()
        this.state = {
            // 性别：0代表未选择，1代表男，2代表女
            gender: "0",
            // 年龄：0代表未选择，1代表20-25，2代表25-30，3代表30-35，4代表35-40
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
        fetch('http://localhost:5000/defaultinfo')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                candidateNames: data.data.default_names,
                candidatePhotos: data.data.default_photos,
                candidateInfo: data.data.default_info
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
        var formData = new FormData();
        formData.set('gender', this.state.gender);
        formData.append('age', this.state.age);
        console.log(this.state.gender)
        console.log(this.state.age)
        console.log(formData)
        // 这里是空的
        fetch("http://localhost:5000/setproperty", {
            method: "POST",
            headers: {},
            contentType: false,
            processData: false,
            body: formData,
        })
        .then(res => res.text())
        .catch(error => console.error('Error: ', error))
        .then(response => {
            console.log('Success: ', response)
            fetch('http://localhost:5000/defaultinfo')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    candidateNames: data.data.default_names,
                    candidatePhotos: data.data.default_photos,
                    candidateInfo: data.data.default_info
                })
                console.log(this.state)
            })
            alert("提交成功！")
        })
    }

    render() {
        return (
          <>
            <Button type="primary" onClick={this.showDrawer} icon={<PlusOutlined />}>
              New account
            </Button>
            <Drawer
              title="Create a new account"
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
                      label="Gender"
                      rules={[{ required: true, message: '请选择您的性别' }]}
                    >
                      <Select 
                        placeholder="请选择您的性别"
                        onChange={this.onGenderChange}
                      >
                        <Option value="0">未选择</Option>
                        <Option value="1">男性</Option>
                        <Option value="2">女性</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="年龄"
                      label="Age"
                      rules={[{ required: true, message: '请选择您的年龄段' }]}
                    >
                      <Select 
                        placeholder="请选择您的年龄段"
                        onChange={this.onAgeChange}
                      >
                        <Option value="0">未选择</Option>
                        <Option value="1">20-25岁</Option>
                        <Option value="2">25-30岁</Option>
                        <Option value="3">30-35岁</Option>
                        <Option value="4">35-40岁</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                    <Button onClick={this.handleUpdate} type="primary">
                        Submit
                    </Button>
                    <div>{this.state.candidateNames}</div>
                    <div>{this.state.candidatePhotos}</div>
                    <div>{this.state.candidateInfo}</div>
                </Row>
              </Form>
            </Drawer>
          </>
        );
    }

}

export default Friend
