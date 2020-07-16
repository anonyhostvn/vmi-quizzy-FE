import React from 'react';
import {AppWrapper} from "./app.style";
import {Layout, Menu} from "antd";
import WorkingSpace from "../WorkingSpace";

const QuizzyApp = () => {

    const LayoutHeaderStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: 1000
    };

    const ContentStyle = {
        marginTop: 64
    }

    return (
        <AppWrapper>
            <Layout.Header style={LayoutHeaderStyle}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"> Trang chủ </Menu.Item>
                    <Menu.Item key="2"> Tổng hợp bài trắc nghiệm </Menu.Item>
                </Menu>
            </Layout.Header>

            <Layout.Content style={ContentStyle}>
                <WorkingSpace/>
            </Layout.Content>

            <Layout.Footer style={{textAlign: 'center'}}> Make by Anonyhostvn </Layout.Footer>
        </AppWrapper>
    )
}

export default QuizzyApp;