import React, { FunctionComponent } from 'react';

interface Props {
    title?: string;
    field?: string;
    editable?: boolean;
    render?: (data) => void;
    className?: string;
    inputType?: string;
}

const ListColumn: FunctionComponent<Props> = () => <></>;

ListColumn.defaultProps = {
    editable: true,
}

export default ListColumn;
