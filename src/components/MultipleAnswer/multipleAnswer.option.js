import React from 'react';

const MultipleAnswerOption = ({keyAns, desc, checked, onChoose}) => {

    const uniqueID = `${Math.random().toString(36).substr(2, 9)}_${keyAns}`;

    return (
        <div className="inputGroupMultiple">
            <input id={uniqueID} name={uniqueID} type="checkbox" checked={checked} onClick={onChoose} />
            <label htmlFor={uniqueID}> {desc} </label>
        </div>
    );
};

export default MultipleAnswerOption;
