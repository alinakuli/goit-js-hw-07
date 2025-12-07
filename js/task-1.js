const categorieList = document.querySelector("#categories");

const items = categorieList.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
);