import {
  addTodoForm,
  titleInput,
  descriptionInput,
  importanceInput,
  addTodoButton,
} from './constants.js';

import { todos, save, addTodoObject } from './todo.js';

export function isEmpty(str) {
  return !str.trim().length;
}

export function addTodo() {
  let newTodo = {
    id: todos[todos.length - 1].id + 1,
    title: titleInput.value,
    description: descriptionInput.value,
    completed: false,
    importance: importanceInput.value || 1,
  };

  if (isEmpty(titleInput.value) || isEmpty(descriptionInput.value)) {
    alert('Title and description are required');
    return;
  } else {
    todos.push(newTodo);
    save(todos);
    addTodoObject(newTodo);

    titleInput.value = '';
    descriptionInput.value = '';
    importanceInput.value = '';
  }

}
