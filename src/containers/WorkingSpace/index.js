import React, {useEffect, useState} from 'react';
import {WorkingSpaceWrapper} from "./workingSpace.style";
import MultipleChoice from "../../components/MultipleChoice";
import {connect} from 'react-redux';
import {WorkingSpaceReducer} from "../../stores/WorkingSpace/workingSpace.reducers";
import StatusBar from "../../components/StatusBar";
import {Button, Layout, Spin} from "antd";
import Spinner from "../../components/Spiner";

const WorkingSpace = ({listQuestion, updateQuestionAnswer, requestGetTest, listAnswer, requestSubmitTest, isLoading}) => {

    const [marginLeft, setMarginLeft] = useState(200);

    useEffect(() => {
        requestGetTest();
    }, [requestGetTest]);

    const handleWhenCollapsed = (collapsed, type) => {
        collapsed ? setMarginLeft(80) : setMarginLeft(200);
    }

    const changeAns = (qid, answer) => {
        updateQuestionAnswer({qid, answer})
    }

    const handleSubmitTest = () => {
        requestSubmitTest({data: listAnswer})
    }

    return (
        <WorkingSpaceWrapper>
            <Layout.Sider className={'overview-place'} collapsible={true} onCollapse={handleWhenCollapsed}>
                <Button type={"primary"} block={true} onClick={handleSubmitTest}> Submit </Button>

                <StatusBar listQuestion={listQuestion}/>

            </Layout.Sider>

            <Layout.Content className={'question-space'} style={{marginLeft}}>
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
            </Layout.Content>
        </WorkingSpaceWrapper>
    )
};

const mapStateToProps = ({WorkingSpaceReducer: {listQuestion, listAnswer, isLoading}}) => ({
    listQuestion,
    listAnswer,
    isLoading
});

export default connect(
    mapStateToProps,
    {
        ...WorkingSpaceReducer.actions
    }
)(WorkingSpace);