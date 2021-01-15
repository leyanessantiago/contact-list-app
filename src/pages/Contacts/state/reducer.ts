import {ContactModel} from '../../../models/contact';

export enum ContactsListActions {
  HANDLE_ON_SEARCH = 'HANDLE_ON_SEARCH',
  HANDLE_ON_PAGE_CHANGE = 'HANDLE_ON_PAGE_CHANGE',
  SET_CONTACTS = 'SET_CONTACTS',
}

export interface ContactsListStateModel {
  page: number;
  searchStrings: string[];
  contacts: ContactModel[];
}

export default function contactsListReducer(state: ContactsListStateModel, action): ContactsListStateModel {
  const { type: actionType, payload } = action;
  switch (actionType as ContactsListActions) {
    case ContactsListActions.HANDLE_ON_SEARCH:
      return { ...state, searchStrings: payload, contacts: [] };
    case ContactsListActions.HANDLE_ON_PAGE_CHANGE:
      return { ...state, page: state.page + 1 };
    case ContactsListActions.SET_CONTACTS:
      return { ...state, contacts: payload }
    default:
      return state;
  }
}
