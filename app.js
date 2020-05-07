//selectors
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");

// Event Listeners

button.addEventListener('click', addTodo);

//Functions
function addTodo (event) {
    event.preventDefault();

    //Create Div container
   let newDiv = document.createElement("div");
   newDiv.classList.add('todo');

   //Create Li elements
   let newItem = document.createElement("li");
   newItem.classList.add('item');
   newItem.innerText = input.value;
   newDiv.appendChild(newItem);

   //Create Delete Button

   let deleteBtn = document.createElement("button")
   deleteBtn.classList.add('delete')
   deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
   deleteBtn.addEventListener('click', () =>{
       newItem.remove();
       deleteBtn.remove();
   })
   
   newDiv.appendChild(deleteBtn);

   

   if(input.value === ''){
       console.log('You need to type something!')
   }else{

   list.appendChild(newDiv)

   }

   input.value = '';


}
