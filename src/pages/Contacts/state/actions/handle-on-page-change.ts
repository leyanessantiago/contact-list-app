import { ContactsListActions } from '../reducer';

export function handleOnPageChange(dispatch) {
  return () => {
    dispatch({ type: ContactsListActions.HANDLE_ON_PAGE_CHANGE });
  };
}
