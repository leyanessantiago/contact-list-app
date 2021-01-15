import { gql } from 'apollo-boost';

export const GET_CONTACTS = gql`
    query contacts($limit: Int, $page: Int, $searchStrings: [String]) {
        contacts(limit: $limit, page: $page, searchStrings: $searchStrings) {
            data {
                id
                name
                email
                address
                phone
                avatar
            }
            count
        }
    }
`;

export const UPDATE_CONTACT = gql`
    mutation updateContact($updateContactInput: UpdateContactInput!) {
        updateContact(updateContactInput: $updateContactInput) {
            id
            name
            email
            address
            phone
            avatar
        }
    }
`;

export const DELETE_CONTACT = gql`
    mutation removeContact($id: Int!) {
        removeContact(id: $id) {
            id
            name
            email
            address
            phone
            avatar
        }
    }
`;
