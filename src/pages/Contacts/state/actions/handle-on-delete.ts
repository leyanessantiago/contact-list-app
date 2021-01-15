import {ContactModel} from '../../../../models/contact';
import {ContactsListActions} from '../reducer';

export function handleOnDelete(dispatch, removeContact) {
  return async (contactToDelete: ContactModel) => {
    try {
      await removeContact({variables: {id: contactToDelete.id}});
      dispatch({ type: ContactsListActions.SET_CONTACTS, payload: [] });
    } catch (e) {
      console.log(e);
    }
  };
}
