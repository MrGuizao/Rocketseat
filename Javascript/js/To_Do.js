let listElement = document.querySelector('.todo .list');
let inputElement = document.querySelector('.todo input');
let buttonElement = document.querySelector('.todo button');
let todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodo() {
     listElement.innerHTML = '';

     for (todo of todos) {
          let todoElement = document.createElement('li');
          todoElement.setAttribute('class', 'todo--element');
          let todoText = document.createTextNode(todo);
          let linkElement = document.createElement('a');
          let linkText = document.createTextNode('Excluir');
          linkElement.setAttribute('href', '#');
          linkElement.appendChild(linkText);
          todoElement.appendChild(todoText);
          todoElement.appendChild(linkElement);
          listElement.appendChild(todoElement);
          let pos = todos.indexOf(todo);
          linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
     }

}
renderTodo();
function addTodo() {
     let todoText = inputElement.value;
     todos.push(todoText);
     inputElement.value = '';
     renderTodo();
     saveToStorage();

}
buttonElement.onclick = addTodo;
function deleteTodo(pos){
     todos.splice(pos, 1);
     renderTodo();
     saveToStorage();

}
function saveToStorage(){
     localStorage.setItem('list_todo', JSON.stringify(todos));

}
