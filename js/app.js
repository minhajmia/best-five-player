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

// manager coach cost  and total expense calculate
function managerCoachCost(costId) {
  const managerCoachInputField = document.getElementById(costId);
  const managerCoachInputFieldString = managerCoachInputField.value;
  const managerCoachCost = parseFloat(managerCoachInputFieldString);
  return managerCoachCost;
}

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    const managerCost = managerCoachCost("manager-field");
    const coachCost = managerCoachCost("coach-field");
    if (isNaN(managerCost && coachCost)) {
      alert("Please provide a number");
      return;
    } else {
      const expenseElement = document.getElementById("total-expense");
      const expenseTotal = parseFloat(expenseElement.innerText);
      const totalExpense = managerCost + coachCost + expenseTotal;
      const allTotalElement = document.getElementById("totalAll");
      allTotalElement.innerText = "$ " + totalExpense;
    }
  });
