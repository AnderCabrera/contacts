import { contactsTable } from './constants.js';

import { showModal } from './update.js';
import { CONTACTS } from '../local-storage-constants.js';

export let contacts = JSON.parse(localStorage.getItem(CONTACTS));

if (!contacts || contacts.length < 1) {
  contacts = [
    {
      id: 0,
      name: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      favorite: true,
    },
    {
      id: 1,
      name: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+1987654321',
      favorite: true,
    },
    {
      id: 2,
      name: 'Michael',
      lastname: 'Johnson',
      email: 'michael.johnson@example.com',
      phone: '+1122334455',
      favorite: false,
    },
    {
      id: 3,
      name: 'Emily',
      lastname: 'Brown',
      email: 'emily.brown@example.com',
      phone: '+1555666777',
      favorite: true,
    },
    {
      id: 4,
      name: 'David',
      lastname: 'Martinez',
      email: 'david.martinez@example.com',
      phone: '+1444333222',
      favorite: false,
    },
    {
      id: 5,
      name: 'Sophia',
      lastname: 'Taylor',
      email: 'sophia.taylor@example.com',
      phone: '+1777888999',
      favorite: true,
    },
  ];

  renderContacts(contacts);
} else renderContacts(contacts);



export function renderContacts(contacts) {
  for (const contact of contacts) {
    let { id, name, lastname, email, phone, favorite } = contact;

    const tr = document.createElement('tr');

    tr.id = id;

    tr.innerHTML = `
      <td class="border border-white"><span class="p-2">${name}</span></td>
      <td class="border border-white"><span class="p-2">${lastname}</span></td>
      <td class="border border-white"><span class="p-2">${phone}</span></td>
      <td class="border border-white"><span class="p-2">${email}</span></td>

      <td class="border border-white p-2">
        <input type="checkbox" ${
          favorite ? 'checked' : ''
        } onclick="return false;" />
      </td>

    `;

    // buttons container
    let buttonsContainer = document.createElement('td');
    buttonsContainer.classList.add(
      'border',
      'border-white',
      'p-2',
      'buttonsContainer',
    );

    // update button
    let updateBtn = document.createElement('button');
    updateBtn.classList.add(
      'bg-sky-600',
      'text-white',
      'px-3',
      'py-2',
      'rounded-md',
      'mr-1',
      'update-button',
    );
    updateBtn.innerHTML = '<i class="fas fa-edit"></i>';
    updateBtn.onclick = () => {
      showModal(contact);
    };

    // delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add(
      'bg-red-600',
      'text-white',
      'px-3',
      'py-2',
      'rounded-md',
      'delete-button',
    );
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.onclick = () => {
      deleteContact(id);
    };

    buttonsContainer.appendChild(updateBtn);
    buttonsContainer.appendChild(deleteBtn);

    tr.appendChild(buttonsContainer);

    contactsTable.appendChild(tr);
  }
}

export function save(contacts) {
  localStorage.setItem(CONTACTS, JSON.stringify(contacts));
}

export function findIndexContact(id) {
  return contacts.findIndex((contact) => contact.id === id);
}

function deleteContact(id) {
  let idContact = findIndexContact(id);

  contacts.splice(idContact, 1);
  save(contacts);

  document.getElementById(id).remove();
}

