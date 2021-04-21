const items = document.querySelectorAll(".item");

items.forEach(function(item) {
    console.log(`Категорії: ${item.children[0].textContent}`);
    let ulList = item.children[1],
    ulListChildrens = ulList.children;
    console.log(`Кількість елементів: ${ulListChildrens.length}`);

});