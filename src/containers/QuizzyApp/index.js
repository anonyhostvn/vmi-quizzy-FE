import React from 'react';
import {AppWrapper} from "./app.style";
import {Layout, Space} from "antd";
import QuizzyAppRouter from "../../routers/app.router";
import {connect} from "react-redux";
import AppFooter from "../../components/AppFooter";
import {HomeOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {routerDict} from "../../routers/app.router.config";

const QuizzyApp = () => {

    const LayoutHeaderStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
    };

    const ContentStyle = {
        marginTop: 64,
        minHeight: '80vh'
    }

    return (
        <AppWrapper>
            <Layout.Header style={LayoutHeaderStyle}>
                <div className="logo">
                    <Link to={routerDict.home}>
                        <Space>
                            <HomeOutlined/>
                            <span className={'.text'}> Quizzy Test </span>
                        </Space>
                    </Link>
                </div>
            </Layout.Header>

            <Layout.Content style={ContentStyle}>
                <QuizzyAppRouter/>
            </Layout.Content>

            <Layout.Footer style={{padding: 0}}>
                <AppFooter/>
            </Layout.Footer>
        </AppWrapper>
    )
}

export default connect()(QuizzyApp);