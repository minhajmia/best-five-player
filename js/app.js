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
