const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const ineke = document.getElementById("ineke");
const gavin = document.getElementById("gavin");
const one = document.getElementById("one");
const two = document.getElementById("two");

one.addEventListener("click", () => {
  ineke.classList.add("active");
  console.log(ineke.style.top);
});

two.addEventListener("click", () => {
  davin.classList.add("active");
  console.log(ineke.hidden);
});

button.addEventListener("click", () => {
  gavin.classList.remove("active");
});

button2.addEventListener("click", () => {
  ineke.classList.remove("active");
});
