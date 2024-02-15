let total = 0;
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const coinForm = document.getElementById("coinForm");
const coinsContainer = document.getElementById("coinsContainer");

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
function resetTotal() {
  total = 0;
  displayTotal();
}

const buttons = document.querySelectorAll("#buttons button");
buttons.forEach((button) => {
  if (button.id === "reset") {
    button.addEventListener("click", resetTotal());
  } else {
    button.addEventListener("click", function () {
      addToTotal(this.id);
    });
  }
});

coinForm.addEventListener("submit", function (event) {
  const count = document.getElementById("count").valueAsNumber;
  const coinType = document.getElementById("coinType").value;
  addCoins(count, coinType);
});

function addCoins(count, coinType) {
  for (let i = 0; i < count; i++) {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    coin.textContent = coinType;
    coin.onclick = function () {
      coin.remove();
    };
    coinsContainer.appendChild(coin);
  }
}
document.getElementById("onButton").addEventListener("click", function () {
  const lightBulb = document.getElementById("lightBulb");
  lightBulb.className = "light";
});

document.getElementById("offButton").addEventListener("click", function () {
  const lightBulb = document.getElementById("lightBulb");
  lightBulb.className = "dark";
});

document.getElementById("toggleButton").addEventListener("click", function () {
  const lightBulb = document.getElementById("lightBulb");
  if (lightBulb.classList.contains("dark")) {
    lightBulb.className = "light";
  } else {
    lightBulb.className = "dark";
  }
});

document.getElementById("endButton").addEventListener("click", function () {
  const lightBulb = document.getElementById("lightBulb");
  lightBulb.remove();

  document.getElementById("onButton").disabled = true;
  document.getElementById("offButton").disabled = true;
  document.getElementById("toggleButton").disabled = true;
  document.getElementById("endButton").disabled = true;
});
