import React, {useEffect} from 'react';
import {WorkingSpaceWrapper} from "./workingSpace.style";
import MultipleChoice from "../../components/MultipleChoice";
import {connect} from 'react-redux';
import {WorkingSpaceReducer} from "../../stores/WorkingSpace/workingSpace.reducers";
import {Layout, Spin} from "antd";
import Spinner from "../../components/Spiner";
import ResultBox from "../../components/ResultBox";

const WorkingSpace = (
    {
        listQuestion,
        updateQuestionAnswer,
        requestGetTest,
        listAnswer,
        requestSubmitTest,
        isLoading, testResult, startTime, endTime, hasTestResult
    }
) => {

    useEffect(() => {
        requestGetTest();
    }, [requestGetTest]);

    const changeAns = (qid, answer) => {
        updateQuestionAnswer({qid, answer})
    }

    const handleSubmitTest = () => {
        requestSubmitTest({data: listAnswer})
    }

    return (
        <WorkingSpaceWrapper>
            <Layout.Sider className={'overview-place'} collapsed={true}>

                {/*<StatusBar listQuestion={listQuestion}/>*/}

            </Layout.Sider>

            <Layout.Content className={'question-space'} style={{marginLeft: 80}}>
                <div className={'list-question'}>

                    <Spin spinning={isLoading} indicator={<Spinner/>}>
                        {
                            listQuestion.map(
                                (singleQuestion, index) => {
                                    return (
                                        <MultipleChoice
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

const mapStateToProps = ({WorkingSpaceReducer: {listQuestion, listAnswer, isLoading, testResult, startTime, endTime, hasTestResult}}) => ({
    listQuestion,
    listAnswer,
    isLoading,
    testResult,
    startTime, endTime, hasTestResult
});

export default connect(
    mapStateToProps,
    {
        ...WorkingSpaceReducer.actions
    }
)(WorkingSpace);