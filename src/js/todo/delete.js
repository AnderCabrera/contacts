import { todos, save, findTodoIndex } from "./todo.js";

export function deleteTodo(id) {
  let todoIndex = findTodoIndex(id);

  todos.splice(todoIndex, 1);
  save(todos);
  document.getElementById(id).remove();
}