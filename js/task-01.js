document.querySelectorAll("#categories .item").forEach(cat => {
  const title = cat.querySelector("h2").innerHTML;
  const liElements = cat.querySelectorAll("li");
  console.log(`Категория: ${title}`);
  console.log(`количество элементов: ${liElements.length}`);
});

