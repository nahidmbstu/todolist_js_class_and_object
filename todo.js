class MakeTodoList {
  constructor(list) {
    this.todoList = list;
    this.todos = [];
  }

  static addtoList(text) {
    let list = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    return li;
  }

  static removeFromList(text) {
    let list = document.getElementById("todo-list");
    let childs = Array.from(list.childNodes);
    let item = childs.find(i => i.innerText === text);
    return item;
  }

  addTodo(text) {
    this.todos.push(text);
    this.todoList.appendChild(MakeTodoList.addtoList(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter(i => i !== text);
    this.todoList.removeChild(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }

  get getList() {
    return this.todos;
  }

  set DummyData(value) {
    this.todos = value;
    this.todos.map(i => MakeTodoList.addtoList(i));
  }
}
