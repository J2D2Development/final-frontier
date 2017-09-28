import React from 'react';
import './input-field.css';

export const InputField = ({val, setVal, placeholder, shouldFocus}) => {
    const focusOn = shouldFocus ? 'autoFocus' : '';

    return (
        <input type="text" value={val} 
            onChange={(evt) => setVal(evt.target.value)} 
            placeholder={placeholder}
            autoFocus
        />
    )
}