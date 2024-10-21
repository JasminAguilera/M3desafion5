let tasks = [
    { id: 1, description: 'Comprar comida jake', completed: false },
    { id: 2, description: 'Estudiar JavaScript', completed: false },
    { id: 3, description: 'dormir', completed: false }
];

const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const completedCount = document.getElementById('completedCount');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.description;
        if (task.completed) {
            li.classList.add('completed');
            li.textContent += ' (Realizado)';
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Realizada';
        completeButton.onclick = () => toggleTaskCompletion(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(task.id);

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
    updateTaskCounts();
}

function updateTaskCounts() {
    taskCount.textContent = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    completedCount.textContent = completedTasks;
}

function addTask() {
    const description = taskInput.value.trim();
    if (description) {
        const newTask = {
            id: tasks.length + 1,
            description: description,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        updateTaskList();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTaskList();
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        updateTaskList();
    }
}

addTaskButton.addEventListener('click', addTask);


updateTaskList();
