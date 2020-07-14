import React from 'react';

const SingleAnswerOption = ({keyAns, desc, checked, onChoose}) => {
    return (
        <div className="inputGroup">
            <input id={keyAns} name={keyAns} type="checkbox" checked={checked} onClick={onChoose}/>
            <label htmlFor={keyAns}> {desc} </label>
        </div>
    );
};

export default SingleAnswerOption;
