import React, {useState} from 'react';
import './singleAnswer.scss';
import MultipleAnswerOption from "./multipleAnswer.option";

const MultipleAnswer = ({options}) => {

    const [ans, setAns] = useState([]);

    const onSelectAns = (ansKey) => {
        if (ans.find(s => s === ansKey)) setAns([...ans.filter(s => s !== ansKey)]);
        else setAns([...ans, ansKey]);
    }

    return (
        <div className="form">
            {
                options.map(s => (
                    <MultipleAnswerOption desc={s.description} keyAns={s.key} checked={ans.includes(s.key)} onChoose={() => onSelectAns(s.key)}/>
                ))
            }
        </div>
    )
}

export default MultipleAnswer;