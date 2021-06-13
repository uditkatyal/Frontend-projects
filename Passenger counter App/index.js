let countIT = document.getElementById("count-it");
let saveIT = document.getElementById("save-it");

let count = 0;

function increment() {
  count += 1;
  countIT.innerText = count;
}
function save() {
  let content = count + " - ";
  saveIT.textContent += content; // textcontent is an alternative for innertext
  countIT.innerText = 0;
  count = 0;
}
