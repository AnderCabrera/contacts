import {
  addModal,
  nameAddModal,
  lastnameAddModal,
  phoneAddModal,
  emailAddModal,
  favoriteAddModal,
  addContactButton,
  cancelAddButton,
  xCloseAddModal,
} from './constants.js';

import { contacts, save, findIndexContact } from './contacts.js';

export function addContact() {
  let newContact = {
    id: contacts[contacts.length - 1].id + 1,
    name: nameAddModal.value,
    lastname: lastnameAddModal.value,
    phone: phoneAddModal.value,
    email: emailAddModal.value,
    favorite: favoriteAddModal.checked,
  };

  contacts.push(newContact);
  save(contacts);
}

export function showModal() {
  
}