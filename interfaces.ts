// function showTodo(todo: { title: string, text: string }) {
//   console.log(todo.title + ': ' + todo.text);
// };

// const newTodo = {
//   title: 'Trash',
//   text: 'Take out trash'
// };

// showTodo(newTodo);

interface Todo {
  title: string,
  text: string
}

function showTodo(todo: Todo) {
  console.log(todo.title + ': ' + todo.text);
};

const newTodo = {
  title: 'Trash',
  text: 'Take out trash'
};

showTodo(newTodo);

