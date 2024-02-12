import { form, filterButton } from './constants.js';
import { todos } from './todo.js';

export function onCick(callback) {
  filterButton.onclick = (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    callback({
      type: formData.get('type'),
      words: formData.get('words'),
    });
  };
}

export function filter(filters) {
  const { type, words } = filters;

  let [...rows] = document.getElementById('todos').getElementsByTagName('tr');

  for (const row of rows) {
    const [title, description, completed] = row.children;

    let shouldHide = false;

    if (words) {
      shouldHide =
        !title.innerText.toLowerCase().includes(words.toLowerCase()) &&
        !description.innerText.toLowerCase().includes(words.toLowerCase());
    }

    const shouldBeCompleted = type === 'completed'; //no
    const isCompleted = completed.children[0].checked; //yes

    if (type !== 'all' && shouldBeCompleted !== isCompleted) {
      shouldHide = true;
    }

    if (shouldHide) {
      row.classList.add('hidden');
    } else {
      row.classList.remove('hidden');
    }
  }
}
