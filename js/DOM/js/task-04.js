let span = document.querySelector("#value");
let buttons = document.querySelectorAll("button");


let counterValue =0;
let increment = function(){
    console.log("increment");
    // console.log(counterValue);
};
let decrement = function(){
    console.log("decrement");
    // console.log(counterValue);
};


buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        // counterValue =span.value;
        let atribute = button.getAttribute("data-action");
        if(atribute==="decrement"){
            decrement();
    } else if (atribute==="increment"){
        increment();
    }
});  
});

console.log(span, buttons);