import React from 'react';

import { ButtonBlock } from '../General/ButtonBlock';
import { InputField } from '../General/InputField';

export const SaveScore = () => {
    return(
        <div>
            <InputField val={this.props.username} setVal={this.props.setUsername}   placeholder="Enter Your Initials" shouldFocus={true}
            />
            
            {this.props.username &&
                <Link to="/game">
                    <ButtonBlock val="Submit and Start Game" />
                </Link>
            }
        </div>
    )
}