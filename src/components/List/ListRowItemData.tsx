import React, {FunctionComponent, useCallback, useState} from 'react';
import classnames from 'classnames';
import Tooltip from '../Tooltip';

interface Props {
  id: string;
  data: any;
  field: string;
  setRowData: (data: any) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  editing: boolean;
  render: (data) => void;
  inputType?: string;
}

const ListRowItemData: FunctionComponent<Props> = (props) => {
  const {
    id,
    data,
    field,
    setRowData,
    placeholder,
    className,
    disabled,
    editing,
    render,
    inputType,
  } = props;

  const [value, setValue] = useState(data[field]);

  const handleChange = useCallback((event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setRowData({...data, [field]: newValue});
  }, [setRowData, data, field]);

  const inputClassNames = classnames('list-row__item-input', className);

  if (editing) {
    return (
        <input
            id={id}
            name={field}
            value={value}
            onChange={handleChange}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClassNames}
        />
    );
  }

  const labelClassNames = classnames('list-row__item-data', className);
  const label = render ? render(data) : value;
  return (
      <Tooltip content={label}>
        <span className={labelClassNames}>{label}</span>
      </Tooltip>
  );
};

export default ListRowItemData;
