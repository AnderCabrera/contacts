import {
  contacts,
  contactsContainer,
  favoriteFilterButton,
  searchInput
} from '../constants.js';

const renderContacts = () => {
  contactsContainer.innerHTML = '';

  for (const contact of contacts) {
    let { name, lastname, email, phone, favorite } = contact;

    contactsContainer.innerHTML += `
    <div class="item flex flex-col p-4 rounded-lg shadow-md shadow-black bg-[#1B262C] text-white">
      <span class="font-black text-lg overflow-hidden break-word">Name</span>
      <span class="overflow-hidden break-all">${name}</span>

      <span class="font-black text-lg mt-3 overflow-hidden break-word">Lastname</span>
      <span class="overflow-hidden break-all">${lastname}</span>

      <span class="font-black text-lg mt-3 overflow-hidden break-word">Email</span>
      <span class="overflow-hidden break-all">${email}</span>

      <span class="font-black text-lg mt-3 overflow-hidden break-word">Phone</span>
      <span class="overflow-hidden break-all">${phone}</span>

      <span class="font-black text-lg mt-3 overflow-hidden break-word">Favorite</span>
      <span class="overflow-hidden break-all">${
        favorite
          ? `<span class="overflow-hidden break-all text-green-600">${favorite}</span>`
          : `<span class="overflow-hidden break-all text-red-600">${favorite}</span>`
      }</span>
    </div>
    `;
  }
};

favoriteFilterButton.addEventListener('click', (e) => {
  contactsContainer.innerHTML = '';

  for (const contact of contacts.filter((contact) => contact.favorite)) {
    let { name, lastname, email, phone, favorite } = contact;

    if (e.target.checked) {
      contactsContainer.innerHTML += `
        <div class="item flex flex-col p-4 rounded-lg shadow-md shadow-black bg-[#1B262C] text-white">
          <span class="font-black text-lg overflow-hidden break-word">Name</span>
          <span class="overflow-hidden break-all">${name}</span>
    
          <span class="font-black text-lg mt-3 overflow-hidden break-word">Lastname</span>
          <span class="overflow-hidden break-all">${lastname}</span>
    
          <span class="font-black text-lg mt-3 overflow-hidden break-word">Email</span>
          <span class="overflow-hidden break-all">${email}</span>
    
          <span class="font-black text-lg mt-3 overflow-hidden break-word">Phone</span>
          <span class="overflow-hidden break-all">${phone}</span>
    
          <span class="font-black text-lg mt-3 overflow-hidden break-word">Favorite</span>
          <span class="overflow-hidden break-all">${`<span class="overflow-hidden break-all text-green-600">${favorite}</span>`}</span>
        </div>
        `;
    } else if (!e.target.checked) {
      renderContacts();
    }
  }
});

document.addEventListener('input', (e) => {
  contactsContainer.innerHTML = '';

  for (const contact of contacts.filter((contact) =>
    contact.name.toLowerCase().includes(e.target.value.toLowerCase())
  )) {
    let { name, lastname, email, phone, favorite } = contact;

    contactsContainer.innerHTML += `
      <div class="item flex flex-col p-4 rounded-lg shadow-md shadow-black bg-[#1B262C] text-white">
        <span class="font-black
        text-lg overflow-hidden break-word">Name</span>
        <span class="overflow-hidden break-all">${name}</span>

        <span class="font-black text-lg mt-3 overflow-hidden break-word">Lastname</span>
        <span class="overflow-hidden break-all">${lastname}</span>

        <span class="font-black text-lg mt-3 overflow-hidden break-word">Email</span>
        <span class="overflow-hidden break-all">${email}</span>

        <span class="font-black text-lg mt-3 overflow-hidden break-word">Phone</span>
        <span class="overflow-hidden break-all">${phone}</span>

        <span class="font-black text-lg mt-3 overflow-hidden break-word">Favorite</span>
        <span class="overflow-hidden break-all">${`<span class="overflow-hidden break-all text-green-600">${favorite}</span>`}</span>
      </div>
      `;

    if (e.target.value === '') {
      renderContacts();
    }

    if (e.target.value === 'asd') {
      contactsContainer.innerHTML = `
        <div class="item flex flex-col p-4 rounded-lg shadow-md shadow-black bg-[#1B262C] text-white">
          <span class="font-black
          text-lg overflow-hidden break-word text-white">Name</span>
          <span class="overflow-hidden break-all">No results found</span>
        </div>
      `;
    }
  }
})

renderContacts();
