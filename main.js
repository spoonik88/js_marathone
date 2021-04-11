const Player1 = {
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Blade"],
    player: 1,
    attack: function() {
        console.log(this.name + " " + "Fight...");
    },
};

const Player2 = {
    name: "Subzero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["Ice scepter"],
    player: 2,
    attack: function() {
        console.log(this.name + " " + "Fight...");
    },
};

const $playerLeft = document.querySelector(".arenas");

const btnHtmlCreate = () => {
    $playerLeft.insertAdjacentHTML(
        "afterbegin",
        `
<div class="control">
    <button class="button">
        Random
    </button>
</div>
`
    );
};
btnHtmlCreate();

const createPlayer = (playerNumber, player) => {
    const $player = document.createElement("div");
    const $progressbar = document.createElement("div");
    const $playerLife = document.createElement("div");
    const $playerName = document.createElement("div");
    const $character = document.createElement("div");
    const $playerImg = document.createElement("img");

    $player.classList.add(playerNumber);
    $progressbar.classList.add("progressbar");

    $playerLife.classList.add("life");
    $playerLife.style.width = player.hp + "%";
    $playerLife.setAttribute("value", player.hp);

    $playerName.classList.add("name");
    $playerName.innerText = player.name;

    $character.classList.add("character");

    $playerImg.src = player.img;

    $playerLeft.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($playerLife);
    $progressbar.appendChild($playerName);
    $character.appendChild($playerImg);
};
createPlayer("player1", Player1);
createPlayer("player2", Player2);

const btnCame = document.querySelector(".button");

const playerFiate = (player) => {
    const $playerHP = document.querySelector('.player' + player.player + ' .life')

    player.hp = player.hp - Math.ceil(Math.random() * 20);
    if (player.hp <= 0) {
        player.hp = 0;
        $playerHP.style.width = player.hp + "%";
    } else {
        $playerHP.style.width = player.hp + "%";
    }
}





btnCame.addEventListener("click", function() {
    const $player1HP = document.querySelectorAll(".life")[0];
    const $player2HP = document.querySelectorAll(".life")[1];

    // Player1.hp = Player1.hp - Math.ceil(Math.random() * 20);
    // if (Player1.hp <= 0) {
    //     Player1.hp = 0;
    //     $player1HP.style.width = Player1.hp + "%";
    // } else {
    //     $player1HP.style.width = Player1.hp + "%";
    // }

    // Player2.hp = Player2.hp - Math.ceil(Math.random() * 20);
    // if (Player2.hp <= 0) {
    //     Player2.hp = 0;
    //     $player2HP.style.width = Player2.hp + "%";
    // } else {
    //     $player2HP.style.width = Player2.hp + "%";
    // }

    // console.log(Player2.hp, Player1.hp);
    playerFiate(Player2)
    playerFiate(Player1)

    if (Player2.hp == 0 || Player1.hp == 0) {
        btnCame.disabled = true;

        const $createWins = document.createElement("h1");
        const $playerWins = document.querySelector(".control");

        $createWins.setAttribute(
            "style",
            " position: absolute;  color: #fff; font-family: 'Mortal Kombat 3';text-align: center;   width: 205px;"
        );

        $playerWins.appendChild($createWins);

        if (Player2.hp > Player1.hp) {
            $createWins.innerText = Player2.name + " " + "wins";
        } else if (Player2.hp === Player1.hp) {
            $createWins.innerText = "draw";
        } else {
            $createWins.innerText = Player1.name + " " + "wins";
        }
    }
});