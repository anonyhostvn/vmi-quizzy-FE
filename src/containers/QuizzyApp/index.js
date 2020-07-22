import React from 'react';
import {AppWrapper} from "./app.style";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {routerDict} from "../../routers/app.router.config";
import QuizzyAppRouter from "../../routers/app.router";
import {connect} from "react-redux";

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
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"> <Link to={routerDict.home}> Trang chủ </Link> </Menu.Item>
                    <Menu.Item key="2"> <Link to={routerDict.work}> Tổng hợp bài trắc nghiệm </Link> </Menu.Item>
                </Menu>
            </Layout.Header>

            <Layout.Content style={ContentStyle}>
                <QuizzyAppRouter/>
            </Layout.Content>

            <Layout.Footer style={{textAlign: 'center'}}> Make by Anonyhostvn </Layout.Footer>
        </AppWrapper>
    )
}

export default connect()(QuizzyApp);