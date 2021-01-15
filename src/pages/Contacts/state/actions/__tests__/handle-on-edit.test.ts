import {handleOnEdit} from '../handle-on-edit';
import {ContactModel} from '../../../../../models/contact';

describe('contacts list state handle on edit action', () => {
    it('should call dispatch with the right props', async () => {
        const contactToUpdate: ContactModel = {
            id: 1,
            name: "Aquila Owens Winters",
            email: "consequat.purus@nibhDonecest.co.uk",
            phone: "561-3053",
            address: "P.O. Box 417, 932 Suspendisse St.",
            avatar: "Rigel Jones",
        };

        const updateContact = jest.fn();
        const handleFunction = handleOnEdit(updateContact);
        await handleFunction(contactToUpdate);
        expect(updateContact).toHaveBeenCalledWith({variables: {updateContactInput: contactToUpdate}})
    });
});
