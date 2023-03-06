class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTaskByIndex(index) {
    this.tasks.splice(index, 1);
  }

  removeAllTasks() {
    this.tasks = [];
  }
}

let todoList1 = new TodoList();
let todoList2 = new TodoList();

let addButton1 = document.getElementById('btn1');
let inputField1 = document.getElementById('input1');
let tasks1 = document.getElementById('box1');
let removeButton1 = document.getElementById('rem1');

let addButton2 = document.getElementById('btn2');
let inputField2 = document.getElementById('input2');
let tasks2 = document.getElementById('box2');
let removeButton2 = document.getElementById('rem2');

// add task to tasks1
addButton1.addEventListener('click', () => {
  let input = inputField1.value.trim();
  if (input === '') {
    alert('Please enter a task.');
  } else {
    let li = document.createElement('li');
    li.textContent = input;
    tasks1.appendChild(li);
    removeButton1.style.display="block";

    let a = document.createElement('a');
    a.textContent = 'x';
    a.href = '#';
    a.className = 'remove';
    li.appendChild(a);
    todoList1.addTask(input);
  }
  inputField1.value = '';
  addButton1.style.display = 'none';
  });

// add task to tasks2
addButton2.addEventListener('click', () => {
  let input = inputField2.value.trim();
  if (input === '') {
    alert('Please enter a task.');
  } else {
    let li = document.createElement('li');
    li.textContent = input;
    tasks2.appendChild(li);
    removeButton2.style.display="block";

    let a = document.createElement('a');
    a.textContent = 'x';
    a.href = '#';
    a.className = 'remove';
    li.appendChild(a);


    todoList2.addTask(input);
  }
  inputField2.value = '';
  addButton2.style.display = 'none';
});

// hide the add button1 if input1 is empty
 inputField1.addEventListener('input', () => {
    let val = inputField1.value.trim();
    if (val === '') {
      addButton1.style.display = 'none';
    } else {
      addButton1.style.display = 'inline-block';
    }
  });

// hide the add button2 if input2 is empty
inputField2.addEventListener('input', () => {
    let val = inputField2.value.trim();
    if (val === '') {
      addButton2.style.display = 'none';
    } else {
      addButton2.style.display = 'inline-block';
    }
  }); 

// remove task from tasks1
tasks1.addEventListener('click', (e) => {
  let li = e.target.parentNode;
  if (li.nodeName === 'LI') {
    let index = Array.from(tasks1.children).indexOf(li);
    todoList1.removeTaskByIndex(index);
    tasks1.removeChild(li);
  }
  
  // hide the removeButton1 if tasks1 is empty
  if (tasks1.children.length === 0) {
    removeButton1.style.display = "none";
    
  }
});

// remove task from tasks2
tasks2.addEventListener('click', (e) => {
  let li = e.target.parentNode;
  if (li.nodeName === 'LI') {
    let index = Array.from(tasks2.children).indexOf(li);
    todoList2.removeTaskByIndex(index);
    tasks2.removeChild(li);
  }
  
    // hide the removeButton2 if tasks2 is empty
  if (tasks2.children.length===0){
    removeButton2.style.display= "none";
  }
});

//Remove all the list of task1
removeButton1.addEventListener('click', () => {
  tasks1.innerHTML = '';
  todoList1.removeAllTasks();
  removeButton1.style.display="none";
});

//remove all the list of task2
removeButton2.addEventListener('click', () => {
  tasks2.innerHTML = '';
 removeButton2.style.display="none";
  todoList2.removeAllTasks();
  
});