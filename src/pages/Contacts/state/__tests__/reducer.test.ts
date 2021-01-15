import contactsListReducer , { ContactsListActions, ContactsListStateModel } from '../reducer';
import {ContactModel} from '../../../../models/contact';

const contact: ContactModel = {
    id: 1,
    name: "Aquila Owens Winters",
    email: "consequat.purus@nibhDonecest.co.uk",
    phone: "561-3053",
    address: "P.O. Box 417, 932 Suspendisse St.",
    avatar: "Rigel Jones",
};

const initialState: ContactsListStateModel = {
    page: 1,
    searchStrings: [],
    contacts: [contact],
};

describe('contacts list state reducer', () => {
    it('should set the right properties if receives an action of type HANDLE_ON_PAGE_CHANGE', () => {
        const result = contactsListReducer(initialState, {type: ContactsListActions.HANDLE_ON_PAGE_CHANGE});

        expect(result.page).toBe(initialState.page + 1);
    });

    it('should set the right properties if receives an action of type HANDLE_ON_SEARCH', () => {
        const result = contactsListReducer(
            initialState,
            {
                type: ContactsListActions.HANDLE_ON_SEARCH,
                payload: ["search"]
            });
        expect(result.searchStrings).toEqual(["search"]);
        expect(result.contacts).toEqual([]);
    });

    it('should set the right properties if receives an action of type SET_CONTACTS', () => {
        const newContact: ContactModel = {
            id: 2,
            name: "Sydney Navarro",
            email: "eget@faucibus.com",
            phone: "236-9730",
            address: "7933 Curabitur Rd.",
            avatar: "Maisie Rasmussen"
        };

        const newContacts = [...initialState.contacts, newContact];

        const result = contactsListReducer(
            initialState,
            {
                type: ContactsListActions.SET_CONTACTS,
                payload: newContacts
            });

        expect(result.contacts).toEqual(newContacts);
    });
});
