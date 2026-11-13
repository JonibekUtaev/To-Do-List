let addButton = document.getElementById('add'); 

let toDoContainer = document.getElementById('todocontainer');
//End of getting elements

//Button
addButton.addEventListener('click', toDo)
function toDo(){
  event.preventDefault();
const div = document.createElement('div');
div.classList.add('secContainer');
toDoContainer.appendChild(div);

const li = document.createElement('li');
li.innerText = input.value;
  div.appendChild(li);



  const trash = document.createElement('button');
  trash.innerText = "trash";
  div.appendChild(trash);
  trash.classList.add('trash-btn')
  trash.addEventListener('click', del);


 
  const check = document.createElement('button');
  check.addEventListener('click', checked);
  function checked(){
    li.style.textDecoration = "line-through";
    li.style.opacity = '0.5';
  }
  check.classList.add('check-btn');
  check.innerText = "check";
  div.appendChild(check);
}

function del(e){
const item = e.target;

const list = item.parentElement;
list.remove();
}