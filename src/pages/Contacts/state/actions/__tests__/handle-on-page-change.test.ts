import {handleOnPageChange} from '../handle-on-page-change';
import { ContactsListActions } from '../../reducer';

describe('contacts list state handle on page change action', () => {
    it('should call dispatch with the right props', async () => {
        const dispatch = jest.fn();
        const handleFunction = handleOnPageChange(dispatch);
        await handleFunction();
        expect(dispatch.mock.calls[0][0]).toEqual({type: ContactsListActions.HANDLE_ON_PAGE_CHANGE});
    });
});
