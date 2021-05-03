const counterEl = document.getElementById("value");
let counterValue = counterEl.innerText;
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

const decrement = () => counterValue--;
const increment = () => counterValue++;
const updateCounter = () => (counterEl.innerText = counterValue);

decrementEl.addEventListener("click", () => {
  decrement();
  updateCounter();
});

incrementEl.addEventListener("click", () => {
  increment();
  updateCounter();
});
