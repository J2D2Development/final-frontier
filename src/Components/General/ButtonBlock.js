import React from 'react';

import './button-block.css';

export const ButtonBlock = ({val}) => {
    return (
        <input type="button" value={val} />
    );
}