const Player1 = {
    name: "Scorpion",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Blade"],
    attack: function() {
        console.log(this.name + " " + "Fight...");
    },
};

const Player2 = {
    name: "Subzero",
    hp: 85,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["Ice scepter"],
    attack: function() {
        console.log(this.name + " " + "Fight...");
    },
};






const createPlayer = (playerNumber, player) => {

    const $playerLeft = document.querySelector(".arenas");
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $playerLife = document.createElement('div');
    const $playerName = document.createElement('div');
    const $character = document.createElement('div');
    const $playerImg = document.createElement('img');

    $player.classList.add(playerNumber);
    $progressbar.classList.add('progressbar');

    $playerLife.classList.add('life');
    $playerLife.setAttribute('value', player.hp);
    $playerLife.style.width = "100%";

    $playerName.classList.add('name');
    $playerName.innerText = player.name;

    $character.classList.add('character');

    $playerImg.src = player.img;



    $playerLeft.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($playerLife);
    $progressbar.appendChild($playerName);
    $character.appendChild($playerImg);



}
createPlayer('player1', Player1);
createPlayer('player2', Player2);