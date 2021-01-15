import {useCallback, useEffect, useReducer} from 'react';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {DELETE_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from '../../../graphql/contact';
import {ContactModel} from '../../../models/contact';
import contactsListReducer, {ContactsListActions} from './reducer';
import {handleOnSearch} from './actions/handle-on-search';
import {handleOnDelete} from './actions/handle-on-delete';
import {handleOnEdit} from './actions/handle-on-edit';
import {handleOnPageChange} from './actions/handle-on-page-change';

interface ContactsData {
  contacts: {
    data: ContactModel[],
    count: number,
  };
}

interface ContactsVars {
  limit: number;
  page: number;
  searchStrings: string[];
}

interface RemoveContactData {
  removeContact: ContactModel;
}

interface RemoveContactVars {
  id: number;
}


interface UpdateContactData {
  updateContact: ContactModel;
}

interface UpdateContactVars {
  updateContactInput: ContactModel;
}

export default function useContactsListState() {
  const [state, dispatch] = useReducer(
      contactsListReducer,
      {
        page: 1,
        searchStrings: [],
        contacts: [],
      },
  );

  const { searchStrings, page, contacts } = state;

  const {loading: fetchingContacts, data, refetch} = useQuery<ContactsData, ContactsVars>(GET_CONTACTS, {
    variables: {limit: 20, page, searchStrings},
  });

  const [updateContact, {loading: savingContact}] = useMutation<UpdateContactData, UpdateContactVars>(UPDATE_CONTACT);

  const [removeContact, {loading: deletingContact}] = useMutation<RemoveContactData, RemoveContactVars>(
      DELETE_CONTACT,
      {
        onCompleted: () => {
          dispatch({ type: ContactsListActions.SET_CONTACTS, payload: [] });
          refetch({limit: contacts.length, page: 1, searchStrings})
        },
      }
  );

  useEffect(() => {
    if (data && data.contacts) {
      dispatch({ type: ContactsListActions.SET_CONTACTS, payload: [...contacts,...data.contacts.data] });
    }
  }, [data])

  return {
    state: {
      ...state,
      fetchingContacts,
      contacts,
      deletingContact,
      savingContact,
      count: data?.contacts.count,
    },
    actions: {
      handleOnSearch: useCallback(handleOnSearch(dispatch, searchStrings), [searchStrings]),
      handleOnPageChange: useCallback(handleOnPageChange(dispatch), []),
      handleOnDelete: useCallback(handleOnDelete(dispatch, removeContact), [removeContact]),
      handleOnEdit: useCallback(handleOnEdit(updateContact), [updateContact]),
    },
  };
}
