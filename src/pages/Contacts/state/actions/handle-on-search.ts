import { ContactsListActions } from '../reducer';
import isEqual from 'lodash.isequal';

export function handleOnSearch(dispatch, currentSearchStrings) {
  return (searchStrings: string[]) => {
    if (!isEqual([...searchStrings].sort(), [...currentSearchStrings].sort())) {
      dispatch({
        type: ContactsListActions.HANDLE_ON_SEARCH,
        payload: searchStrings,
      });
    }
  };
}
