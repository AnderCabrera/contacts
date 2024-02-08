import {
  updateModal,
  nameModal,
  lastnameModal,
  phoneModal,
  emailModal,
  favoriteModal,
  continueModal,
  cancelModal,
} from './constants.js';

import { contacts, save, findIndexContact } from './contacts.js';

export function updateContact(contact) {
  let index = findIndexContact(contact.id);

  contacts[index].name = nameModal.value;
  contacts[index].lastname = lastnameModal.value;
  contacts[index].phone = phoneModal.value;
  contacts[index].email = emailModal.value;
  contacts[index].favorite = favoriteModal.checked;

  save(contacts);

  updateModal.classList.add('hidden');
}

export function showModal(contact) {
  nameModal.value = contact.name;
  lastnameModal.value = contact.lastname;
  phoneModal.value = contact.phone;
  emailModal.value = contact.email;
  favoriteModal.checked = contact.favorite;

  updateModal.classList.remove('hidden');

  continueModal.onclick = () => {
    updateContact(contact);

    let contactRow = document.getElementById(contact.id);

    contactRow.children[0].innerText = nameModal.value;
    contactRow.children[1].innerText = lastnameModal.value;
    contactRow.children[2].innerText = phoneModal.value;
    contactRow.children[3].innerText = emailModal.value;
    contactRow.children[4].children[0].checked = favoriteModal.checked;

    updateModal.classList.add('hidden');
  };

  cancelModal.onclick = () => {
    updateModal.classList.add('hidden');
  };
}
