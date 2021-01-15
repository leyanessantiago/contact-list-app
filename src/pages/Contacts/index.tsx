import React, {FunctionComponent} from 'react';
import List from '../../components/List';
import ListColumn from '../../components/List/ListColumn';
import avatarRender from './avatar-render';
import useContactsListState from './state';
import SearchInput from '../../components/SearchInput';
import './styles.scss';

const Contacts: FunctionComponent = (): any => {
    const {
        state: {
            contacts,
            fetchingContacts,
            deletingContact,
            count,
        },
        actions: {
            handleOnSearch,
            handleOnPageChange,
            handleOnDelete,
            handleOnEdit,
        }
    } = useContactsListState();

    return (
        <>
            <div className="contact-list__search-input">
                <SearchInput onSearch={handleOnSearch} />
            </div>
            <div className="contact-list">
                <List
                    data={contacts}
                    onEdit={handleOnEdit}
                    onDelete={handleOnDelete}
                    loading={(fetchingContacts || deletingContact) && contacts.length === 0}
                    onInfinityScroll={handleOnPageChange}
                    count={count}
                >
                    <ListColumn className="contact-list__avatar-column" field="avatar" editable={false} render={avatarRender}/>
                    <ListColumn title="Name" field="name"/>
                    <ListColumn title="Address" inputType="textarea" field="address"/>
                    <ListColumn title="Phone Number" field="phone"/>
                    <ListColumn title="Email" field="email"/>
                </List>
            </div>
        </>
    );
}

export default Contacts;
