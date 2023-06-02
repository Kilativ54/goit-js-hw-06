const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const firstItem = document.createElement("li");
  list.classList.add("item");
  firstItem.textContent = ingredient;
  list.append(firstItem);
});

// for (let i = 0; i < ingredients.length; i += 1) {
//   const firstItem = document.createElement("li");
//   list.classList.add("item");
//   firstItem.textContent = ingredients[i];
//   list.prepend(firstItem);
// }
