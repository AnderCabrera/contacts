export const contactsContainer = document.getElementById('contacts-group');
export const favoriteFilterButton = document.getElementById('favorites-filter');
export const searchInput = document.getElementById('search-input');

export let contacts = [
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
