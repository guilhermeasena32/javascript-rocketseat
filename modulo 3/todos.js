var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

// var todos = JSON.parse(localStorage.getItem("list_todos")) || [];
var todos = [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    // Criar item da lista
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    todoElement.appendChild(todoText);

    // Criar botao de excluir
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    // Adiciona botao excluir dentro do li e o li dentro do ul.
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  // Adiciona o novo todo na lista de todos.
  todos.push(todoText);
  // Limpa o input.
  inputElement.value = "";
  // chama a função para montar a lista de todos.
  renderTodos();
  // saveToStorage(); localStorage não funciona sem você aceitar cookies de terceiros no navegador.
}

buttonElement.onclick = addTodo; // Sempre passar a função sem parênteses.

function deleteTodo(pos) {
  todos.splice(pos, 1); // posição, quantidade de item a ser excluido.
  renderTodos();
  // saveToStorage(); localStorage não funciona sem você aceitar cookies de terceiros no navegador.
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
  
}
