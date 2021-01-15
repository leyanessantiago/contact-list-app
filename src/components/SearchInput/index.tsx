import React, {FunctionComponent, useCallback, useMemo, useState} from 'react';
import SearchIcon from './SearchIcon';
import './styles.scss'
import RemoveIcon from './RemoveIcon';
import RenderIf from '../RenderIf';

interface Props {
    onSearch: (value: any) => void;
}

const SearchInput: FunctionComponent<Props> = (props): any => {
    const {onSearch} = props;

    const [state, setState] = useState({
        inputValue: '',
        values: [],
    });

    const { inputValue, values } = state;

    const handleOnChange = useCallback((event) => {
        const newValue = event.target.value;
        setState((oldState) => ({ ...oldState, inputValue: newValue }));
    }, []);

    const handleOnSearch = useCallback(() => {
        onSearch(values);
    }, [values, onSearch]);

    const removeTag = useCallback((tagIndex: number) => {
        const newValues = values.filter((_, index) => index !== tagIndex);
        if (newValues.length === 0) {
            onSearch([]);
        }
        setState((oldState) => ({...oldState, values: newValues}))
    },[values, onSearch]);

    const handleOnKeyDown = useCallback(({key}) => {
        if (key === "Enter" && inputValue) {
            setState((oldState) => ({ values: [...oldState.values, inputValue], inputValue: '' }));
        } else if (key === "Backspace" && !inputValue) {
            removeTag(values.length - 1);
        }
    }, [inputValue, values, removeTag]);

    const tags = useMemo(() => {
        return values.map((value, index) => {
            const handleRemoveIconClick = () => {
                removeTag(index);
            }

            return (
                <span className="search-input__tag">
                    <span>{value}</span>
                    <RemoveIcon onClick={handleRemoveIconClick} />
                </span>
            )
        })
    }, [values, removeTag]);

    return (
        <div className="search-input__container">
            <SearchIcon />
            <div className="search-input__tags__container" onClick={() => {document.getElementById("search-input").focus();}}>
                <RenderIf isTrue={tags.length > 0}>
                    <div id="search-input-tags" className="search-input__tags">
                        {tags}
                    </div>
                </RenderIf>
                <input
                    id="search-input"
                    className="search-input"
                    value={inputValue}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                />
            </div>
            <button className="search-input__button" onClick={handleOnSearch}>SEARCH</button>
        </div>
    );
}

export default SearchInput;
