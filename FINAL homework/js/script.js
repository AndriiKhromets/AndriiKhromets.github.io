const buttonAdd = document.querySelector(".btn");
const buttonSave = document.getElementById("save");
const todoEditor = document.querySelector(".js-todo-editor");
const cardlistInTodo = document.querySelector(".card_list_todo");
const cardlistInProgress = document.querySelector(".card_list_inprogress");
const cardlistDone = document.querySelector(".card_list_done");

Sortable.create(cardlistInTodo, { group: "board" });
Sortable.create(cardlistInProgress, { group: "board" });
Sortable.create(cardlistDone, { group: "board" });

buttonAdd.addEventListener("click", showTodoEditor);
todoEditor.addEventListener("submit", addCard);

const crossIcon = `
    <svg class='cross' width='32' height='32' fill='currentColor' stroke='currentColor'  viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'  d='M6 18L18 6M6 6l12 12'></path>  </svg>   
    `;

function createCard(title, description, priority) {
    let card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<h5>${title}</h5><p>${description}</p>${crossIcon}`;
    card.setAttribute("priority", priority);
    if (priority === "H"){
        card.style.background = "blueviolet";
    } else if (priority === "M") {
        card.style.background= "yellowgreen"; 
        } else if (priority === "L") {
        card.style.background="pink";
    }

    cardlistInTodo.append(card);
}

function showTodoEditor() {
    todoEditor.classList.add("is-visible");
}

function hideTodoEditor() {
    todoEditor.classList.remove("is-visible");
}

function addCard(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const title = formElements.title.value;
    const description = formElements.description.value;
    const priority = formElements.priority.value;
    console.log(formElements);

    createCard(title, description, priority);
    event.currentTarget.reset();
    hideTodoEditor();
}

const newForEach = function(){
    let newbuttons = document.querySelectorAll('.cross');
    newbuttons.forEach(function(button){
        let block = button.parentElement
        button.addEventListener("click", function(){
            block.style.display = 'none';
    });
    });
}
