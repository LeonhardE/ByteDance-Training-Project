import React, { Component } from 'react'

import './index.css'
import 'antd/dist/antd.css'; 
import { Layout } from 'antd';
const { Header, Sider, Footer, Content } = Layout;

export default class ShowBox extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}
