# First we need to know the basics of class in Javascript,

From MDN ,

Javascript class are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.

Class declarations

To declare a class, you use the class keyword with the name of the class.

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Class Expression is another way

```
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

# important thing to remember

The body of a class is executed in strict mode.

two types of methods

1 . Prototype methods

class methods

2 . Static methods

static method has no this . this used for creating utility functions

Private field declarations

```
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

The extends keyword

The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

The super Keyword is used to access parents properties

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

Setter and Getter Methods

get and set keywords before function actually binds an object property to a function that will be called when that property is looked up.

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get Area() {
      return  this.height * this.width
  }
}
```

# Now the Practical example . We create a MakeTodoList Class

```
class MakeTodoList {
  constructor(list) {
    this.todoList = list;
    this.todos = [];
  }
}
```

we add two property methods to add and delete todo

```
  addTodo(text) {
    this.todos.push(text);
    this.todoList.appendChild(MakeTodoList.addtoList(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter(i => i !== text);
    this.todoList.removeChild(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }
```

we set some dummy data to list using the setter method

```
  set DummyData(value) {
    this.todos = value;
    this.todos.map(i => MakeTodoList.addtoList(i));
  }
```

we can observe the current items by getter method

```
  get getList() {
    return this.todos;
  }
```

we also add some utility fuction as static method.

```
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
```

we have created our class but how to use this class ? Ok . First we need a object of this class

```
    let listEle = new MakeTodoList(list);
```

we set the dummy data using setter method and set the data using getter method

```
    listEle.DummyData = ["Play FootBall", "Do Homework"]; // setter method for Dummy Data
    console.log("current  ...........", listEle.getList); //   getter method
```

# now the main part

add todo

```
 listEle.addTodo(input); //  calling method from class
```

remove todo

```
 listEle.removeTodo(target.innerText);

```

You can find the full code in GitHub

[full code](https://github.com/nahidmbstu/todolist_js_class_and_object)
