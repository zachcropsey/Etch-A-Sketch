const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "div";
  div.style.flex = "1 0 6.25%";
  div.style.aspectRatio = "1/1";
  container.appendChild(div);
}
addHoverListeners();

function addHoverListeners() {
  const hover = document.querySelectorAll(".div");

  for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = getRandomColor();
    });
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let size = prompt("Select the grid size 1-100");
  console.log(size);

  // clear previous grid

  container.innerHTML = "";

  // calc flex basis

  let flexBasis = 100 / size + "%";

  // make new grid based on prompt

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.flex = `1 0 ${flexBasis}`;
    div.style.aspectRatio = "1/1";
    container.appendChild(div);
  }

  // re-select the newly created divs and add the event listener
  addHoverListeners();
});
