import React from 'react';
import './singleAnswer.scss';
import SingleAnswerOption from "./singleAnswer.option";

const SingleAnswer = ({options, recentAns, changeAns}) => {

    const onSelectAns = (ansKey) => {
        if (ansKey === recentAns) changeAns(null);
        else changeAns(ansKey);
    }

    return (
        <div className="form">
            {
                options.map((s, index) => {
                    return <SingleAnswerOption key={index} desc={s.description} keyAns={s.key} checked={recentAns === s.key} onClick={() => onSelectAns(s.key)}/>;
                })
            }
        </div>
    )
}

export default SingleAnswer;