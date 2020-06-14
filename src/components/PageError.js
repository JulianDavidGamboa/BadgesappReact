import React from 'react';

import './styles/PageError.css'
import logoError from '../images/503.svg';

function PageError(props) {
    return (
        <div>
            <img src={logoError} className="ImageError" alt="logoError"/>
            <div className="PageError">
                <h1 className="text-danger">{props.error.message}</h1>
            </div>
        </div>
    );
}

export default PageError;