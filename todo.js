class MakeTodoList {

    constructor(list) {
        this.todoList = list;
        this.todos = [];
    }

    static addtoList(text) {
        var li = document.createElement("li");
        li.textContent = text;
        return li;
    }


    addTodo(text) {
        this.todos.push(text);
        this.todoList.appendChild(MakeTodoList.addtoList(text))
    }

    removeTodo(text) {
        let index = this.todos.findIndex(text)
        delete this.todos[index]
    }

    get List() {
        return this.todos
    }

}