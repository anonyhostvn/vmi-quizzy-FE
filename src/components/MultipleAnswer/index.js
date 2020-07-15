import React from 'react';
import './singleAnswer.scss';
import MultipleAnswerOption from "./multipleAnswer.option";

const MultipleAnswer = ({options, changeAns, recentAns}) => {

    const onSelectAns = (ansKey) => {
        if (recentAns) {
            if (recentAns.find(s => s === ansKey)) changeAns([...recentAns.filter(s => s !== ansKey)]);
            else changeAns([...recentAns, ansKey]);
        } else changeAns([ansKey]);
    }

    return (
        <div className="form">
            {
                options.map(s => (
                    <MultipleAnswerOption
                        desc={s.description}
                        keyAns={s.key}
                        checked={recentAns ? recentAns.includes(s.key) : false}
                        onChoose={() => onSelectAns(s.key)}
                    />
                ))
            }
        </div>
    )
}

export default MultipleAnswer;