//define UI vars
const form = document.querySelector('#task-form');
const tasklist  = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput =document.querySelector('#task');

//load all event listener
loadEventListener();


function loadEventListener(){
    form.addEventListener('submit', addTask);
    //remove task event
    tasklist.addEventListener('click',removeTask);
    //clear task
    clearBtn.addEventListener('click',clearTask);
    //filter tasks
    filter.addEventListener('keyup', filterTasks)
    
}

//Add Task

function addTask(e) {
    if (taskInput.value === ''){
        alert('add a task');
        e.preventDefault();
    } else{
 //create Li element
const li = document. createElement('li');
//add class
li.className = 'collection-item';
//create and append text node
li.appendChild(document.createTextNode(taskInput.value));
//create del btn
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class= "fa fa-remove"></i>';
li.appendChild(link);

//Append li to Ul

tasklist.appendChild(li);
//clear input
taskInput.value = '';
e.preventDefault();
}
};

 //Remove task

 function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
e.target.parentElement.parentElement.remove();
        
    }
}
 }

 //clear Task
 //can set tasklist.innerhtml to empty or  loop through and call remove child
 function clearTask() {
     while (tasklist.firstChild) {
         tasklist.removeChild(tasklist.firstChild);
     }
 }

//filter tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
            }else{
             task.style.display = 'none'  ; 
        }
    }

);

}