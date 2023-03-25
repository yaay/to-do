console.log(document.getElementById('taskInput'));


function taskPlanner() {
    let task = document.getElementById('taskInput');
    let table = document.getElementById('tasksTable');
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Set the checkbox as the contents of cell1
    cell1.appendChild(checkbox);
    cell2.innerHTML = task.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    
    // Create the trash icon element from Font Awesome
    let trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash-alt');
    
    // Set the trash icon as the contents of the delete button
    deleteBtn.appendChild(trashIcon); 
    
    // Set the delete button as the contents of cell3
    cell3.appendChild(deleteBtn);
  
}