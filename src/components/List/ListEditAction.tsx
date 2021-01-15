import React, {FunctionComponent} from 'react';
import Button from '../Button';

interface Props {
    data: any;
    onEdit: (data: any) => void;
    editing: boolean;
    setEditing: (editing: boolean) => void;
    setLoading: (loading: boolean) => void;
    loading: boolean;
}

const ListEditAction: FunctionComponent<Props> = (props) => {
    const {data, onEdit, setEditing, editing, setLoading, loading} = props;

    if (editing) {
        const handleOnEdit = async () => {
            setLoading(true);
            await onEdit(data);
            setLoading(false);
            setEditing(false)
        }

        return <Button className="list__action" label="Save" onClick={handleOnEdit} loading={loading} />;
    }

    const handleSetEditing = () => {
        setEditing(true);
    }

    return <Button className="list__action" label="Edit" onClick={handleSetEditing} disabled={loading} />;
}

export default ListEditAction;
