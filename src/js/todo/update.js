import {
  editTodoForm,
  editTitleInput,
  editDescriptionInput,
  editImportanceInput,
  editCompletedInput,
  editTodoButton,
  cancelEditButton,
  xButton,
} from './constants.js';

import { todos, save, findTodoIndex } from './todo.js';

export function isEmpty(str) {
  return !str.trim().length;
}

export function updateTodo(todo) {
  let index = findTodoIndex(todo.id);

  todos[index].title = editTitleInput.value;
  todos[index].description = editDescriptionInput.value;
  todos[index].importance = editImportanceInput.value || 1;
  todos[index].completed = editCompletedInput.checked;

  save(todos);

  editTodoForm.classList.add('hidden');
}

export function showEditModal(todo) {
  editTitleInput.value = todo.title;
  editDescriptionInput.value = todo.description;
  editImportanceInput.value = todo.importance;
  editCompletedInput.checked = todo.completed;

  editTodoForm.classList.remove('hidden');

  editTodoButton.onclick = () => {
    if (isEmpty(editTitleInput.value) || isEmpty(editDescriptionInput.value)) {
      alert('All fields are required');
      return;
    } else updateTodo(todo);

    let todoRow = document.getElementById(todo.id);

    todoRow.children[0].innerText = editTitleInput.value;
    todoRow.children[1].innerText = editDescriptionInput.value;
    todoRow.children[2].children[0].checked = editCompletedInput.checked;
    todoRow.children[3].innerText = editImportanceInput.value;

    editTodoForm.classList.add('hidden');
  };

  cancelEditButton.onclick = () => {
    editTodoForm.classList.add('hidden');
  };

  xButton.onclick = () => {
    editTodoForm.classList.add('hidden');
  };
}