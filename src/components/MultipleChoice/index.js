import React from 'react';
import {MultipleChoiceWrapper} from './multiplechoice.style';
import MultipleAnswer from "../MultipleAnswer";
import SingleAnswer from "../SingleAnswer";

const MultipleChoice = (
    {
        index, qid, mode, question, options, changeAns, recentAns,
        hasTestResult, resultStatus
    }
) => {

    const _changeAns = (ans) => {
        changeAns(qid, ans);
    }

    return (
        <MultipleChoiceWrapper id={`question-${index}`}>
            <div className={'question-area'}>
                {index + 1}. {question}
            </div>

            {
                mode === 'singleChoice' ?
                    <SingleAnswer options={options} recentAns={recentAns} changeAns={_changeAns}/>
                    : <MultipleAnswer resultStatus={resultStatus} hasTestResult={hasTestResult} options={options} recentAns={recentAns} changeAns={_changeAns}/>
            }

        </MultipleChoiceWrapper>
    );
}

export default MultipleChoice;