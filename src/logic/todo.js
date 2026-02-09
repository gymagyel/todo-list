export function createTodo(
  title,
  description = "",
  dueDate = "",
  priority = null
) {
  return {
    title,
    description,
    dueDate,
    priority,
    completed: false,
  };
}
