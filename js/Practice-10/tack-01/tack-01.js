const items = document.querySelectorAll(".item");

items.forEach(function(item) {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    let ulList = item.lastElementChild; 
    console.log(`Количество вложенных li: ${ulList.children.length}`);
});