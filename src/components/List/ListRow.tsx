import React, {FunctionComponent, ReactElement, useState} from 'react';
import classnames from 'classnames';
import Button from '../Button';
import ListRowItemData from './ListRowItemData';
import ListEditAction from './ListEditAction';
import ListRowRemoveConfirm from './ListRowRemoveConfirm';

interface Props {
    data: any;
    rowColumns: ReactElement[];
    onEdit: (data: any) => void;
    onDelete: (data: any) => void;
}

const ListRow: FunctionComponent<Props> = (props) => {
    const {data, rowColumns, onEdit, onDelete} = props;

    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState(data);

    const actions: ReactElement[] = [];
    if (onEdit) {
        actions.push(
            <ListEditAction
                key={`list-edit-action-${data.id}`}
                data={rowData}
                editing={editing}
                onEdit={onEdit}
                setEditing={setEditing}
                loading={loading}
                setLoading={setLoading}
            />
        );
    }
    if (onDelete) {
        const handleOnDelete = () => {
            setDeleting(true);
        }
        actions.push(
            <Button
                key={`list-delete-action-${data.id}`}
                label="Remove"
                className="list__action"
                onClick={handleOnDelete}
                disabled={loading}
                mL
            />
        )
    }

    const items = rowColumns.map(({ props: itemProps }) => {
        const { field, title, editable, render, className, inputType } = itemProps;
        const isEditing = editable ? editing : false;
        const columnClassNames = classnames('list-row__column', {overflow: !isEditing}, className);

        return (
            <div className={columnClassNames} key={`list-column-${field}-${data.id}`}>
                <div className="list-row__column-title">{ title }</div>
                <ListRowItemData
                    id={`list-row-item-data-${field}-${data.id}`}
                    data={rowData}
                    setRowData={setRowData}
                    field={field}
                    editing={isEditing}
                    render={render}
                    inputType={inputType}
                />
            </div>
        );
    }).concat(actions);

    if (deleting) {
        return (
            <ListRowRemoveConfirm
                data={data}
                onDelete={onDelete}
                setDeleting={setDeleting}
                loading={loading}
                setLoading={setLoading}
            />
        );
    }

    return (
        <div className="list-row" id={`list-row-id-${rowData.id}`}>
            {items}
        </div>
    )
}

export default ListRow;
