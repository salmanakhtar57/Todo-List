document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#todo-form');
    const taskInput = document.querySelector('#task');
    const submitBtn = document.querySelector('#submit');
    const resetBtn = document.querySelector('#reset');
    const taskList = document.querySelector('#tasks');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const task = taskInput.value;
        if (task.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    resetBtn.addEventListener('click', function() {
        taskList.innerHTML = '';
    });

    taskInput.addEventListener('input', function() {
        submitBtn.disabled = taskInput.value.trim() === '';
    });
});