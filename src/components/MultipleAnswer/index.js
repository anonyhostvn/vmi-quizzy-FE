import React from 'react';
import './singleAnswer.scss';
import MultipleAnswerOption from "./multipleAnswer.option";

const mappingStatusToClassStyle = {
    "right": null,
    "miss" : "inputGroupMultipleMiss",
    "wrong": "inputGroupMultipleWrong",
    "none": null
}

const MultipleAnswer = (
    {
        options, changeAns, recentAns,
        hasTestResult, resultStatus
    }
) => {

    const onSelectAns = (ansKey) => {
        if (recentAns) {
            if (recentAns.find(s => s === ansKey)) changeAns([...recentAns.filter(s => s !== ansKey)]);
            else changeAns([...recentAns, ansKey]);
        } else changeAns([ansKey]);
    }

    return (
        <div className="form">
            {
                options.map((s, index) => {
                    const correspondStatus = hasTestResult ? resultStatus[index]['status'] : "none";
                    const checkedOrNotWhenHasResult = ['miss', 'right', 'wrong'].includes(correspondStatus);
                    const checkedOtNotWhenNotHasResult = recentAns ? recentAns.includes(s.key) : false;

                    const classStyle = mappingStatusToClassStyle[correspondStatus];

                    return (
                        <MultipleAnswerOption
                            key={index}
                            desc={s.description}
                            keyAns={s.key}
                            classStyle={classStyle}
                            checked={hasTestResult ? checkedOrNotWhenHasResult : checkedOtNotWhenNotHasResult}
                            onChoose={() => onSelectAns(s.key)}
                        />
                    )
                })
            }
        </div>
    )
}

export default MultipleAnswer;