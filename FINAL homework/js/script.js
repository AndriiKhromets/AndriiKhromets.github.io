let buttonAdd = document.querySelector(".btn"),
createCard = document.querySelector(".create_todo");

let buttonSave = document.getElementById("save"),
    inputName = document.getElementById("name"),
    inputDescription = document.getElementById("description"),
    buttonsRadio = document.querySelectorAll(".radio_btn");


let data = {
    name:"",
    description:"",
    priority:""
};

buttonSave.addEventListener("click", (event)=>{
    event.preventDefault();
    data.name = inputName.value;
    data.description = inputDescription.value;

    clearInputs(inputName, inputDescription);
    createCard.style.display="nove";
    arrowToDo = cardlistTodo.querySelectorAll(".arrow");
    console.log(arrowToDo)
}); 

buttonsRadio.forEach((button)=>{
    button.addEventListener("change", function(){
        console.log(button);
        data.priority = button.getAttribute("priority");
    })
});



function createCardFunction(buttonSave,fcardlistTodo);
function clearInputs(nameInput,descriptionInput){
    nameInput.value="";
    descriptionInput.value ="";
}

let cardlistInProgress = document.querySelector(".card_list_inprogress"),
arrowToDo = cardlistTodo.querySelectorAll(".arrow");
console.log(arrowToDo);

buttonAdd.addEventListener("click", function(){
    createCard.style.display="block";
});

function createCardFunction(button, list){
    button.addEventListener("click", function(){
        let card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML= " <h5>"+data.name+"</h5>  <p>"+data.description+"</p>  <svg class='cross' width='32' height='32' fill='currentColor' stroke='currentColor'  viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'  d='M6 18L18 6M6 6l12 12'></path>  </svg>   <svg xmlns='http://www.w3.org/2000/svg' class='arrow_right' width='32' height='32'   fill='currentColor' viewBox='0 0 24 24' stroke='currentColor'>   <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 8l4 4m0 0l-4 4m4-4H3'/> </svg>"
        if(data.priority === "H"){
            card.style.background==="blueviolet";
        } else if (data.priority === "M") {
            card.style.background=== "yellowgreen"; 
        } else if (data.priority === "L") {
            card.style.background==="pink";
        }
        list.innertBefore(card,createCard);
    })
}