import React, { useState } from 'react';
import './InputGroup.scss';

const InputGroup = ({ number, setAnswerBody }) => {

    const [value, setValue] = useState('')
    const [name, setName] = useState(`Answer ${number}`);



    return (
        <div className="input-group">
            <label>Answer {number}</label>
            <div className="inputs">
                <input type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    name={name} />
                <input className="checkbox" type="checkbox"
                    onClick={() => {
                        console.log(`${name} checkesd`);
                    }}
                />
            </div>
        </div>
    );
}

export default InputGroup;
