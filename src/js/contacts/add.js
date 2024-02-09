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

import { contacts, save, addContactView } from './contacts.js';

import { isEmpty } from './update.js';

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
  addContactView(newContact);
}

export function showModal() {
  addModal.classList.remove('hidden');

  addContactButton.onclick = () => {
    if (
      isEmpty(nameAddModal.value) ||
      isEmpty(lastnameAddModal.value) ||
      isEmpty(phoneAddModal.value) ||
      isEmpty(emailAddModal.value)
    ) {
      alert('All fields are required');
      return;
    } else {
      addContact();
      nameAddModal.value = '';
      lastnameAddModal.value = '';
      phoneAddModal.value = '';
      emailAddModal.value = '';
      favoriteAddModal.checked = false;
    }

    addModal.classList.add('hidden');
  };

  cancelAddButton.onclick = () => {
    addModal.classList.add('hidden');
  };

  xCloseAddModal.onclick = () => {
    addModal.classList.add('hidden');
  };
}
