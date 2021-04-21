const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const ulList = document.querySelector("ul");

elements.forEach(function(li) {
    let Li = document.createElement("li");
    Li.textContent = li;
    ulList.appendChild(Li);
});
console.log(ulList)