let total = 0;
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");

function displayTotal() {
  document.getElementById("totalID").innerText = `Total: $${total.toFixed(2)}`;
}

function addToTotal(buttonId) {
  if (buttonId === "item1") {
    total += 2.0;
  } else if (buttonId === "item2") {
    total += 3.0;
  } else if (buttonId === "item3") {
    total += 4.0;
  } else if (buttonId === "item4") {
    total += 6.0;
  }
  displayTotal();
}

const buttons = document.querySelectorAll("#buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    addToTotal(this.id);
  });
});
