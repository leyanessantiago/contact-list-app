import React, {FunctionComponent, useRef, useState} from 'react';
import Popup from './Popup';
import './styles.scss';

interface Props {
    content: any;
    align?: 'left' | 'right' | 'top' | 'bottom';
}

const Tooltip: FunctionComponent<Props> = (props) => {
    const { content, align, children } = props;

    const wrapperRef = useRef<HTMLDivElement>();

    const [state, setState] = useState({
        visible: false,
        boundingClientRect: {right: 0, top: 0, left: 0, bottom: 0, width: 0, height: 0},
    });

    const handleOnMouseEnter = () => {
        setState({
            visible: true,
            boundingClientRect: wrapperRef.current.getBoundingClientRect(),
        });
    };

    const handleOnMouseLeave = () => {
        setState( {...state, visible: false});
    };

    const { visible, boundingClientRect} = state;

    return (
        <div
            ref={wrapperRef}
            className="tooltip__wrapper"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {children}
            <Popup wrapperBoundingClientRect={boundingClientRect} visible={visible} content={content} align={align}/>
        </div>
    );
};

Tooltip.defaultProps = {
    align: 'bottom',
};

export default Tooltip;
