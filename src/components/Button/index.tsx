import React, {FunctionComponent} from 'react';
import Loader from 'react-loader-spinner';
import classnames from 'classnames';
import './styles.scss';

interface Props {
    label?: string;
    onClick?: (e) => void;
    danger?: boolean
    mL?: boolean;
    mR?: boolean;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
    type?: "button" | "submit" | "reset";
}

const Button: FunctionComponent<Props> = (props) => {
    const {
        loading,
        label,
        disabled,
        className,
        onClick,
        id,
        type,
        mR,
        mL,
        danger,
    } = props;

    const renderContent = () => {
        if (loading) {
            return (
                <Loader type="ThreeDots" color="#00BFFF" width="14" height="14" />
            );
        }
        return <span>{label}</span>;
    };

    const buttonClassName = classnames(
        'button',
        {
            disabled,
            loading,
            'margin-right': mR,
            'margin-left': mL,
            danger,
        },
        className,
    );

    const handleOnClick = (event) => {
        if (!loading) {
            onClick(event);
        }
    };

    return (
        <button type={type} id={id} className={buttonClassName} onClick={handleOnClick} disabled={disabled}>
            {renderContent()}
        </button>
    )
}

export default Button;
