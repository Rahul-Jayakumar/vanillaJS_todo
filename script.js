document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const tasksList = document.getElementById('tasksList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const taskText  = document.createElement('span');
        taskText.textContent = taskInput.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'; //Delete button mechanism follows
        deleteButton.onclick = function() {
            li.remove();
        };
        //Append task text + delete button to list element
        
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        tasksList.appendChild(li)
        taskInput.value = ''; // Clear input field after adding
    } else {
        alert('Please enter a task!');
    }
});

//Toggle complete class - make items clickable
document.getElementById('tasksList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }

});


