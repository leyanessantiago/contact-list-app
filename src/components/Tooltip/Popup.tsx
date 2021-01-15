import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

interface Props {
    wrapperBoundingClientRect: {
        right: number,
        top: number,
        left: number,
        bottom: number,
        width: number,
        height: number,
    };
    visible: boolean;
    content: any;
    align: 'left' | 'right' | 'top' | 'bottom';
}

const Popup: FunctionComponent<Props> = (props) => {
    const {
        wrapperBoundingClientRect:
            {
                top: wrapperTop,
                right: wrapperRight,
                left: wrapperLeft,
                bottom: wrapperBottom,
                width: wrapperWidth,
                height: wrapperHeight,
            },
        visible,
        content,
        align,
    } = props;

    const ref = useRef<HTMLDivElement>();

    const [state, setState] = useState({
        width: 0,
        height: 0,
    });

    const {width, height} = state;

    useEffect(() => {
        if (ref && ref.current && !width && !height) {
            setState(ref.current.getBoundingClientRect());
        }
    }, [props.wrapperBoundingClientRect, width, height]);

    const getLeft = () => {
        if (align === 'right') {
            return wrapperRight + 12;
        }
        if (align === 'left') {
            return wrapperLeft - width - 24;
        }
        return wrapperLeft - Math.abs(wrapperWidth / 2 - width / 2);
    };

    const getTop = () => {
        if (align === 'top') {
            return wrapperTop - height - 18;
        }
        if (align === 'bottom') {
            return wrapperBottom + 12  ;
        }
        if (align === 'left' || align === 'right') {
            return wrapperTop - Math.abs(wrapperHeight / 2 - height / 2);
        }
    };

    const style = {
        top: getTop(),
        left: getLeft(),
    };

    const classNames = classnames(
        'tooltip',
        {'tooltip-arrow-left': align === 'right'},
        {'tooltip-arrow-right': align === 'left'},
        {'tooltip-arrow-top': align === 'bottom'},
        {'tooltip-arrow-bottom': align === 'top'},
    );

    if (visible && content) {
        return ReactDOM.createPortal(
            <span ref={ref} className={classNames} style={style}>{content}</span>,
            document.body,
        );
    }
    return null;
};

export default Popup;
