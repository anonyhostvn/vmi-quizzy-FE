import React, {useState} from 'react';
import {WorkingSpaceWrapper} from "./workingSpace.style";
import MultipleChoice from "../../components/MultipleChoice";
import {connect} from 'react-redux';
import {WorkingSpaceReducer} from "../../stores/WorkingSpace/workingSpace.reducers";
import StatusBar from "../../components/StatusBar";
import {Button, Layout} from "antd";

const WorkingSpace = ({listQuestion, updateQuestionAnswer}) => {

    const [marginLeft, setMarginLeft ] = useState(200);

    const handleWhenCollapsed = (collapsed, type) => {
        collapsed ? setMarginLeft(80) : setMarginLeft(200);
    }

    const changeAns = (qid, answer) => {
        updateQuestionAnswer({qid, answer})
    }

    return (
        <WorkingSpaceWrapper>
            <Layout.Sider className={'overview-place'} collapsible={true} onCollapse={handleWhenCollapsed}>
                <StatusBar listQuestion={listQuestion}/>

                <Button type={"primary"} block={true}> Submit </Button>
            </Layout.Sider>

            <Layout.Content className={'question-space'} style={{marginLeft}}>
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
            </Layout.Content>
        </WorkingSpaceWrapper>
    )
};

const mapStateToProps = ({WorkingSpaceReducer: {listQuestion}}) => ({
    listQuestion
});

export default connect(
    mapStateToProps,
    {
        ...WorkingSpaceReducer.actions
    }
)(WorkingSpace);