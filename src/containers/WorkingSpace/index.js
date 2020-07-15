import React from 'react';
import {WorkingSpaceWrapper} from "./workingSpace.style";
import MultipleChoice from "../../components/MultipleChoice";
import {connect} from 'react-redux';
import {WorkingSpaceReducer} from "../../stores/WorkingSpace/workingSpace.reducers";

const WorkingSpace = ({listQuestion, updateQuestionAnswer}) => {

    const changeAns = (qid, answer) => {
        updateQuestionAnswer({qid, answer})
    }

    return (
        <WorkingSpaceWrapper>
            {
                listQuestion.map(
                    (singleQuestion, index) => {
                        return (
                            <MultipleChoice
                                key={index}
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