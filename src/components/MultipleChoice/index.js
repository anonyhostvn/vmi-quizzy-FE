import React from 'react';
import {MultipleChoiceWrapper} from './multiplechoice.style';
import MultipleAnswer from "../MultipleAnswer";

const MultipleChoice = () => {

    const question = 'Compilers, Editors software, and OS come under which type of software?'
    const answer = [
        {
            description: 'System software',
            key: 'A'
        },
        {
            description: 'Passing the name property to all input[type="radio"] that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.',
            key: 'B'
        },
        {
            description: 'Scientific software',
            key: 'C'
        },
        {
            description: 'None of the above',
            key: 'D'
        }
    ]

    return (
        <MultipleChoiceWrapper>
            <div className={'question-area'}>
                {question}
            </div>

            {/*<SingleAnswer options={answer}/>*/}

            <MultipleAnswer options={answer}/>

        </MultipleChoiceWrapper>
    );
}

export default MultipleChoice;