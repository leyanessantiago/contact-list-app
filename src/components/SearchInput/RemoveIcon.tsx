/* tslint:disable:max-line-length */
import React, { FunctionComponent } from 'react';

interface Props {
    onClick: (e) => void;
}

const RemoveIcon: FunctionComponent<Props> = ({onClick}) => {
    return (
        <svg onClick={onClick} className="search-input__tag__icon" width="12" height="12" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient id="New_Gradient_Swatch_1" x1="256" x2="256" y2="512" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ededee"/>
                    <stop offset="0.76" stopColor="#cfd0d2"/>
                    <stop offset="1" stopColor="#a6a8ab"/>
                </linearGradient>
                <linearGradient id="New_Gradient_Swatch_2" x1="256" y1="399.41" x2="256" y2="112.59" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#231f20"/>
                    <stop offset="1" stopColor="#6d6e70"/>
                </linearGradient>
            </defs>
            <title>
                delete
            </title><path d="M256,512c141,0,256-115,256-256S397,0,256,0,0,115,0,256,115,512,256,512Z" fillRule="evenodd" fill="url(#New_Gradient_Swatch_1)"/>
            <path d="M352.39,119.31l29.85,29.86a23.09,23.09,0,0,1,0,32.57L308,256l74.27,74.27a23.1,23.1,0,0,1,0,32.57l-29.86,29.85a23.1,23.1,0,0,1-32.57,0l-74.26-74.26-74.27,74.26a23.1,23.1,0,0,1-32.57,0l-29.85-29.85a23.1,23.1,0,0,1,0-32.57L183.14,256l-74.27-74.26a23.09,23.09,0,0,1,0-32.57l29.85-29.86a23.1,23.1,0,0,1,32.57,0l74.27,74.26,74.26-74.26A23.1,23.1,0,0,1,352.39,119.31Z" fill="#fff" fill-rule="evenodd"/><path d="M362.84,119.31l29.85,29.86a23.08,23.08,0,0,1,0,32.57L318.43,256l74.26,74.27a23.08,23.08,0,0,1,0,32.57l-29.85,29.85a23.11,23.11,0,0,1-32.58,0L256,318.43l-74.27,74.26a23.09,23.09,0,0,1-32.56,0l-29.86-29.85a23.1,23.1,0,0,1,0-32.57L193.57,256l-74.26-74.26a23.09,23.09,0,0,1,0-32.57l29.86-29.86a23.09,23.09,0,0,1,32.56,0L256,193.58l74.26-74.26A23.11,23.11,0,0,1,362.84,119.31Z" fillRule="evenodd" fill="url(#New_Gradient_Swatch_2)"/>
        </svg>
    );
};

export default RemoveIcon;
