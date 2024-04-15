const joc = document.querySelector('.section-container-submit-button');
const gameResult = document.querySelector('.section-container-castigatorul');
const player1piatra = document.querySelector('.player-one-choose-piatra');
const player1hartie = document.querySelector('.player-one-choose-hartie');
const player1foarfeca = document.querySelector('.player-one-choose-foarfeca');
const player2piatra = document.querySelector('.player-two-choose-piatra');
const player2hartie = document.querySelector('.player-two-choose-hartie');
const player2foarfeca = document.querySelector('.player-two-choose-foarfeca');
const jucatori = document.querySelector('.section-players-container');
const afterGameButtons = document.querySelector('.section-after-game');
const background = document.querySelector('body');
const scorButton = document.querySelector('.scor-button');
const backButton = document.querySelector('.back-button');
const tabelaScor = document.querySelector('.tabela-scor');
const punctajPlayerOne = document.querySelector('.puncte-player-1');
const punctajPlayerTwo = document.querySelector('.puncte-player-2');

let playerOne = '';
let playerTwo = '';

const playerOneChoosePiatra = () => {
    playerOne = 'piatra';
    return playerOne;
    
};
const playerOneChooseHartie = () => {
    playerOne = 'hartie';
    return playerOne;
};
const playerOneChooseFoarfeca = () => {
    playerOne = 'foarfeca';
    return playerOne;
};

const playerTwoChoosePiatra = () => {
    playerTwo = 'piatra';
    return playerTwo;
};
const playerTwoChooseHartie = () => {
    playerTwo = 'hartie';
    return playerTwo;
};
const playerTwoChooseFoarfeca = () => {
    playerTwo = 'foarfeca';
    return playerTwo;
};


player1piatra.addEventListener('click', playerOneChoosePiatra );
player1hartie.addEventListener('click', playerOneChooseHartie );
player1foarfeca.addEventListener('click', playerOneChooseFoarfeca );
player2piatra.addEventListener('click', playerTwoChoosePiatra );
player2hartie.addEventListener('click', playerTwoChooseHartie );
player2foarfeca.addEventListener('click', playerTwoChooseFoarfeca );
let playerOnePoints = 0;
let playerTwoPoints = 0;

const rps = (p1, p2) => {
    if (p1 === p2) {
        playerOnePoints += 1;
        playerTwoPoints += 1;
        return "Egalitate";
    }
    if(p1 === 'foarfeca') {
        if (p2 === 'hartie') {
            playerOnePoints += 1;
            return 'Player 1 a castigat';
            
        }
        if (p2 === 'piatra') {
            playerTwoPoints += 1;
            return 'Player 2 a castigat'
        }
    } else if (p1 === 'piatra') {
        if (p2 === 'hartie') {
            playerTwoPoints += 1;
            return 'Player 2 a castigat';
        }
        if (p2 === 'foarfeca') {
            return 'Player 1 a castigat'
        }
    } else {
        if (p2 === 'piatra') {
            playerOnePoints += 1;
            return 'Player 1 a castigat';
        }
        if (p2 === 'foarfeca') {
            playerTwoPoints += 1;
            return 'Player 2 a castigat';
        }
    }

};


const findWinner = () => {
    gameResult.innerText = rps(playerOne, playerTwo);
    gameResult.style.display = "block";
    gameResult.style.fontSize = "40px";
    joc.style.display = "none";
    jucatori.style.display = "none";
    afterGameButtons.style.display = "flex";
    punctajPlayerOne.innerText = playerOnePoints;
    punctajPlayerTwo.innerText = playerTwoPoints;
};

joc.addEventListener('click', findWinner);

const arataScorul = () => {
    gameResult.style.display = "none";
    tabelaScor.style.display = "block";
   
}
scorButton.addEventListener('click', arataScorul);

const inapoiLaJoc = () => {
    joc.style.display = "block";
    jucatori.style.display = "flex";
    gameResult.style.display = "none";
    afterGameButtons.style.display = "none";
    tabelaScor.style.display = "none";
}
backButton.addEventListener('click', inapoiLaJoc);

