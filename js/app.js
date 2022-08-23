const playerList = [];

function displayPlayer(players) {
  const tbody = document.getElementById("player-list");
  tbody.innerHTML = " ";
  for (let i = 0; i < players.length; i++) {
    const name = players[i].playerName;
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${name}</td>
    `;
    tbody.appendChild(tr);
  }
}

function addToCart(player) {
  const name = player.parentNode.children[0].innerText;
  const playerObj = {
    playerName: name,
  };

  if (playerList.length >= 5) {
    alert("Select only 5 player");
    return;
  }

  playerList.push(playerObj);
  displayPlayer(playerList);

  player.setAttribute("style", "background: #fff");
  player.setAttribute("class", "disabled btn");
}

/// perPlayer calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerInputField = document.getElementById("per-player");
  const perPlayerInputFieldString = perPlayerInputField.value;
  const perPlayerCost = parseFloat(perPlayerInputFieldString);
  console.log(perPlayerCost);
  const totalPlayerCost = perPlayerCost * playerList.length;
  const expenseElement = document.getElementById("total-expense");
  expenseElement.innerText = totalPlayerCost;
  perPlayerInputField.value = "";
});
