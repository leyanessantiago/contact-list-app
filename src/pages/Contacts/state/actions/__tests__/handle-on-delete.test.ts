import {handleOnDelete} from '../handle-on-delete';
import { ContactsListActions } from '../../reducer';
import {ContactModel} from '../../../../../models/contact';

describe('contacts list state handle on delete action', () => {
    it('should call dispatch with the right props', async () => {
        const contactToDelete: ContactModel = {
            id: 1,
            name: "Aquila Owens Winters",
            email: "consequat.purus@nibhDonecest.co.uk",
            phone: "561-3053",
            address: "P.O. Box 417, 932 Suspendisse St.",
            avatar: "Rigel Jones",
        };

        const dispatch = jest.fn();
        const removeContact = jest.fn();
        const handleFunction = handleOnDelete(dispatch, removeContact);
        await handleFunction(contactToDelete);
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: ContactsListActions.SET_CONTACTS,
            payload: [],
        });
        expect(removeContact).toHaveBeenCalledWith({variables: {id: contactToDelete.id}})
    });
});
