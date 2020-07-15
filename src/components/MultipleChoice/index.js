import React from 'react';
import {MultipleChoiceWrapper} from './multiplechoice.style';
import MultipleAnswer from "../MultipleAnswer";
import SingleAnswer from "../SingleAnswer";

const MultipleChoice = ({qid, mode, question, options, changeAns, recentAns}) => {

    const _changeAns = (ans) => {
        changeAns(qid,ans);
    }

    return (
        <MultipleChoiceWrapper>
            <div className={'question-area'}>
                {question}
            </div>

            {
                mode === 'singleChoice' ?
                    <SingleAnswer options={options} recentAns={recentAns} changeAns={_changeAns} />
                    : <MultipleAnswer options={options} recentAns={recentAns} changeAns={_changeAns}/>
            }

        </MultipleChoiceWrapper>
    );
}

export default MultipleChoice;