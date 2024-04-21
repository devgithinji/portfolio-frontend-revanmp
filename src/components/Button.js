import React from 'react';

const Button = ({children, onclick, className}) => {
    return (
        <button onClick={onclick} className={className}>
            {children}
        </button>
    );
};

export default Button;
