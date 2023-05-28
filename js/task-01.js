const list = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
  console.log(`Category: ${item.querySelectorAll("h2")[0].textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
