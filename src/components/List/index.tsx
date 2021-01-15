import React, { FunctionComponent } from 'react';
import Loader from 'react-loader-spinner';
import {Waypoint} from 'react-waypoint';
import classnames from 'classnames';
import ListRow from './ListRow';
import RenderIf from '../RenderIf';
import './styles.scss'

interface Props {
    data: any;
    onEdit?: (data: any) => void;
    onDelete?: (id: any) => void;
    loading?: boolean;
    savingId?: boolean;
    deletingId?: boolean;
    onInfinityScroll?: () => void;
    count: number;
}

const List: FunctionComponent<Props> = (props): any => {
    const {
        data,
        children,
        onEdit,
        onDelete,
        loading,
        onInfinityScroll,
        count,
    } = props;

    const rowColumns: any = React.Children.toArray(children);

    const rows = data?.map((rowData: any) => {
        return (
            <ListRow
                key={`list-row-${rowData.id}`}
                data={rowData}
                rowColumns={rowColumns}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        )
    });

    const content = loading ? <Loader type="Circles" color="#00BFFF" /> : rows;
    const classNames = classnames('list', {loading});

    return (
        <div className={classNames}>
            {content}
            <RenderIf isTrue={data.length > 0 && data.length < count}>
                <div className="list__infinity-scroll">
                    <Loader type="ThreeDots" color="#00BFFF"/>
                    <Waypoint
                        key="cursor"
                        onEnter={onInfinityScroll}
                        bottomOffset="0px"
                    />
                </div>
            </RenderIf>
        </div>
    )
}

export default List;
