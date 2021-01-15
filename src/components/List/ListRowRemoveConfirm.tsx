import React, {FunctionComponent, useState} from 'react';
import Button from '../Button';

interface Props {
    data: any;
    onDelete: (data: any) => void;
    setDeleting: (deleting: boolean) => void;
    setLoading: (loading: boolean) => void;
    loading: boolean;
}

const ListRowRemoveConfirm: FunctionComponent<Props> = (props) => {
    const {data, onDelete, setDeleting, setLoading, loading} = props;

    const handleOnDelete = async () => {
        setLoading(true);
        await onDelete(data);
        setLoading(false);
        onClose();
    }

    const onClose = () => {
        setDeleting(false);
    }

    return (
        <div className="list-row--confirm">
            <span>Are you sure you want to delete this contact {data.name}?</span>
            <Button
                key={`list-delete-action-yes-${data.id}`}
                label="Yes"
                onClick={handleOnDelete}
                danger
                loading={loading}
            />
            <Button
                key={`list-delete-action-no-${data.id}`}
                label="No"
                onClick={onClose}
                disabled={loading}
            />
        </div>
    );
}

export default ListRowRemoveConfirm;
