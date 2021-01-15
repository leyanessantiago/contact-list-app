import {ContactModel} from '../../../../models/contact';

export function handleOnEdit(updateContact) {
  return async (rowData: ContactModel) => {
    const { id, name, avatar, address, email, phone} = rowData;
    try {
      await updateContact({variables: {updateContactInput: {id, phone, email, address, avatar, name}}});
    } catch (e) {
      console.log(e);
    }
  };
}
