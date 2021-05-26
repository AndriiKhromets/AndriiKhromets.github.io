function collectInputData(inputs) {
    let clothings = [];
    inputs.forEach(function(input) {
        let clothing = input.getAttribute("value");
        clothings.push(clothing);
    });
    return clothings;
}

let inputs = document.querySelectorAll("input:checked");
let day = collectInputData(inputs);
console.log(day);