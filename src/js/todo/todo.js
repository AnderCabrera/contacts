import { TODO } from '../local-storage-constants.js';

import { todosTable, addTodoButton } from './constants.js';

import { addTodo } from './add.js';
import { showEditModal } from './update.js';
import { deleteTodo } from './delete.js';
import { onCick, filter } from './filters.js';

export let todos = JSON.parse(localStorage.getItem(TODO));

if (!todos || todos.length < 1) {
  todos = [
    {
      id: 0,
      title: 'Buy groceries',
      description: 'Milk, Cheese, Pizza, Fruit, Tylenol',
      completed: false,
      importance: 100,
    },
    {
      id: 1,
      title: 'Do laundry',
      description: 'idk what to say here',
      completed: true,
      importance: 200,
    },
    {
      id: 2,
      title: 'Read a book',
      description: 'War and Peace',
      completed: false,
      importance: 300,
    },
    {
      id: 3,
      title: 'Go to the gym',
      description: 'Chest day',
      completed: true,
      importance: 400,
    },
  ];
  renderTodos();
} else renderTodos();

export function save(todos) {
  localStorage.setItem(TODO, JSON.stringify(todos));
}

export function renderTodos() {
  for (const todo of todos) {
    addTodoObject(todo);
  }
}

export function addTodoObject(todo) {
  let { id, title, description, completed, importance } = todo;

  const tr = document.createElement('tr');

  tr.id = id;

  tr.innerHTML = `
    <td class="border border-gray-600">${title}</td>
    <td class="border border-gray-600">${description}</td>

    <td class="border border-gray-600 p-2">
      <input type="checkbox" ${completed ? 'checked' : ''} />
    </td>

    <td class="border border-gray-600">${importance}</td>
  `;

  // buttons container
  let buttonsContainer = document.createElement('td');

  buttonsContainer.classList.add(
    'border',
    'border-gray-600',
    'p-2',
    'buttonsContainer',
    'flex',
    'justify-center',
    'w-full'
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

  tr.children[2].children[0].onchange = () => {
    let index = findTodoIndex(id);
    todos[index].completed = !todos[index].completed;
    save(todos);
  }

  updateBtn.innerHTML = '<i class="fas fa-edit"></i>';
  updateBtn.onclick = () => {
    showEditModal(todo);
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

  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  deleteBtn.onclick = () => {
    deleteTodo(id);
  };

  buttonsContainer.appendChild(updateBtn);
  buttonsContainer.appendChild(deleteBtn);

  tr.appendChild(buttonsContainer);
  todosTable.appendChild(tr);
}

export function findTodoIndex(id) {
  return todos.findIndex((todo) => todo.id === id);
}

addTodoButton.onclick = () => {
  addTodo();
}

onCick((filters) => {
  filter(filters);
});
