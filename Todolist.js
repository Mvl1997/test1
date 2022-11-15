/*******************************/
/* TODOLIST OBJECT CONSTRUCTOR */
/*******************************/
function TodoList(name, color = "black") {
  this.name = name;
  this.todos = [];
  this.color = color;
}
TodoList.prototype.setName = function (newName) {
  this.name = newName;
};
TodoList.prototype.addTodo = function (todo, urgency) {
  this.todos.push(new Todo(todo, urgency));
};
TodoList.prototype.removeTodo = function (id) {
  this.todos = this.todos.filter(function (todoObject) {
    if (todoObject.id === id) {
      return false;
    } else {
      return true;
    }
  });
};
TodoList.prototype.empty = function () {
  this.todos.length = 0;
};
/***************************/
/* TODO OBJECT CONSTRUCTOR */
/***************************/
function Todo(todoName, urgency = "low") {
  this.id = Math.random().toString(36).substring(2);
  this.name = todoName;
  this.checked = false;
  this.created = new Date();
  this.updated = null;
  this.urgency = urgency;
}
Todo.prototype.setChecked = function (value) {
  this.checked = value;
  this.updated = new Date();
};
Todo.prototype.setName = function (newName) {
  this.name = newName;
  this.updated = new Date();
};
