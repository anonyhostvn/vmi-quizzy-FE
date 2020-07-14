import React, {useState} from 'react';
import './singleAnswer.scss';
import SingleAnswerOption from "./singleAnswer.option";

const SingleAnswer = ({options}) => {

    const [ans, setAns] = useState(null);

    const onSelectAns = (ansKey) => {
        if (ansKey === ans) setAns(null);
        else setAns(ansKey);
    }

    return (
        <div className="form">
            {
                options.map(s => (
                    <SingleAnswerOption desc={s.description} keyAns={s.key} checked={ans === s.key} onChoose={() => onSelectAns(s.key)}/>
                ))
            }
        </div>
    )
}

export default SingleAnswer;