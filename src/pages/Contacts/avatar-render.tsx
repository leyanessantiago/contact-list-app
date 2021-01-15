import React from 'react';
import Avatar from 'react-avatar';
import {ContactModel} from '../../models/contact';

export default function avatarRender (rowData: ContactModel) {
    const { name, avatar} = rowData;
    return (
        <Avatar name={name} src={avatar} round size="50" />
    );
}
