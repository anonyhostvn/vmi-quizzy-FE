import React, {useEffect, useMemo} from 'react';
import {WorkingSpaceWrapper} from "./workingSpace.style";
import MultipleChoice from "../../components/MultipleChoice";
import {connect} from 'react-redux';
import {WorkingSpaceReducer} from "../../stores/WorkingSpace/workingSpace.reducers";
import {Layout, Modal, Spin} from "antd";
import Spinner from "../../components/Spiner";
import ResultBox from "../../components/ResultBox";
import {AccountBookOutlined} from '@ant-design/icons';

const WorkingSpace = (
    {
        listQuestion,
        updateQuestionAnswer,
        requestGetTest,
        listAnswer,
        requestSubmitTest,
        isLoading, testResult, startTime, endTime, hasTestResult, resultStatus
    }
) => {

    const modalProps = useMemo(() => {
        return {
            title: 'Chào mừng bạn đến với bài thi bằng lái xe A1',
            icon: <AccountBookOutlined/>,
            content: <div>
                Chúc bạn làm bài thi thật tốt nhé !
            </div>,
            width: 800,
            onOk: () => {
                requestGetTest();
                Modal.destroyAll();
            }
        }
    }, [requestGetTest]);

    useEffect(() => {
        Modal.success({...modalProps});
    }, [modalProps]);

    const changeAns = (qid, answer) => {
        updateQuestionAnswer({qid, answer})
    }

    const handleSubmitTest = () => {
        requestSubmitTest({data: listAnswer})
    }

    return (
        <WorkingSpaceWrapper>
            <Layout.Sider className={'overview-place'} collapsed={true}>

                {/*<Menu theme={'dark'}>*/}
                {/*    <Menu.Item icon={<HomeOutlined/>}>*/}
                {/*        <Link to={routerDict.home}>*/}
                {/*            Home*/}
                {/*        </Link>*/}
                {/*    </Menu.Item>*/}
                {/*</Menu>*/}

            </Layout.Sider>

            <Layout.Content className={'question-space'} style={{marginLeft: 80}}>
                <div className={'list-question'}>

                    <Spin spinning={isLoading} indicator={<Spinner/>}>
                        {
                            listQuestion.map(
                                (singleQuestion, index) => {
                                    return (
                                        <MultipleChoice
                                            hasTestResult={hasTestResult}
                                            resultStatus={hasTestResult ? resultStatus[index] : {}}
                                            key={index}
                                            index={index}
                                            qid={singleQuestion.qid}
                                            mode={'multipleChoice'}
                                            question={singleQuestion.question}
                                            options={singleQuestion.options}
                                            changeAns={changeAns}
                                            recentAns={singleQuestion.answer}
                                        />
                                    )
                                }
                            )
                        }
                    </Spin>
                </div>

                <div className={'result-space'}>
                    <ResultBox
                        listAnswer={listAnswer}
                        result={testResult}
                        startTime={startTime}
                        endTime={endTime}
                        handleSubmitTest={handleSubmitTest}
                        requestGetTest={requestGetTest}
                        hasTestResult={hasTestResult}
                    />
                </div>
            </Layout.Content>
        </WorkingSpaceWrapper>
    )
};

const mapStateToProps = ({WorkingSpaceReducer: {listQuestion, listAnswer, isLoading, testResult, startTime, endTime, hasTestResult, resultStatus}}) => ({
    listQuestion,
    listAnswer,
    isLoading,
    testResult,
    startTime, endTime, hasTestResult, resultStatus
});

export default connect(
    mapStateToProps,
    {
        ...WorkingSpaceReducer.actions
    }
)(WorkingSpace);