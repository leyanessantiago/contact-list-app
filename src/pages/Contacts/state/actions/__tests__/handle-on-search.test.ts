import {handleOnSearch} from '../handle-on-search';
import { ContactsListActions } from '../../reducer';

describe('contacts list state handle on search action', () => {
    it('should call dispatch with the right props', async () => {
        const searchStrings = ['search'];
        const dispatch = jest.fn();
        const handleFunction = handleOnSearch(dispatch, []);
        await handleFunction(searchStrings);
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: ContactsListActions.HANDLE_ON_SEARCH,
            payload: searchStrings,
        });
    });
});
