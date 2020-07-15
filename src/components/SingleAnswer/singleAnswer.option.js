import React from 'react';

const SingleAnswerOption = ({keyAns, desc, checked, onClick}) => {

    const uniqueID = `${Math.random().toString(36).substr(2, 9)}_${keyAns}`;

    return (
        <div className="inputGroup">
            <input id={uniqueID} name={uniqueID} type="checkbox" checked={checked} onClick={onClick}/>
            <label htmlFor={uniqueID}> {desc} </label>
        </div>
    );
};

export default SingleAnswerOption;
