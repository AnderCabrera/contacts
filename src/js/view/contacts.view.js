document.addEventListener('DOMContentLoaded', () => {
  let contactsContainer = document.getElementById('contacts-group');

  let contacts = [
    {
      name: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      favorite: true,
    },

    {
      name: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+1987654321',
      favorite: true,
    },

    {
      name: 'Michael',
      lastname: 'Johnson',
      email: 'michael.johnson@example.com',
      phone: '+1122334455',
      favorite: false,
    },

    {
      name: 'Emily',
      lastname: 'Brown',
      email: 'emily.brown@example.com',
      phone: '+1555666777',
      favorite: true,
    },

    {
      name: 'David',
      lastname: 'Martinez',
      email: 'david.martinez@example.com',
      phone: '+1444333222',
      favorite: false,
    },

    {
      name: 'Sophia',
      lastname: 'Taylor',
      email: 'sophia.taylor@example.com',
      phone: '+1777888999',
      favorite: false,
    },
  ];

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
      <span class="overflow-hidden break-all">${favorite}</span>
    </div>
    `;
  }
});
