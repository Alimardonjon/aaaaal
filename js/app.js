// elements
const word = document.getElementById('word'); //h3
const text = document.getElementById('input_area'); // input
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const words = [
    "Salom",
    "Assalom",
    "Do'stlar",
    "Ishlash",
    "Hunar",
    "Bilim",
    "Kasb",
    "Ilm",
    "Kino",
    "Tanlash",
    "Vaqt",
    "So'zlar",
    "Iymon",
    "Savod",
    "Imlo",
    "Xato",
    "Tenglama",
    "Vazifa",
    "Barcha",
    "imkon",
    "tinglovchi",
    "so'rov",
    "Til nafaqat muomala vositasi",
    "urf-odati, uning turmush tarzi, tarixi",
    "balki xalqning maʼnaviyati, madaniyati",
    "eng muhimi mustaqillik belgisidir",
    "Dunyoda 7 mingdan ortiq tillar",
    "Tinchlik",
  ]

  let randomWord;

let score = 0;

let time = 60;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function addToDom() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord;
}
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}  

function updateTime() {
    time--;
    timeEl.innerHTML = time + " sekund";

    if(time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}
const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
    endGameEl.innerHTML = `
        <h1>Berilgan vaqt tugadi hurmatli foydalanuvchi!</h1>
        <h3>Seni to'plagan baling: ${score}</h3>
        <button onclick="location.reload()">Yana yangidan boshlash</button>
    `
    endGameEl.style.display = "flex";
}

addToDom();

text.addEventListener("input", (e) => {
    const typedText = e.target.value;

    if(typedText === randomWord){
        updateScore(); // ++1
        addToDom();
        e.target.value = "";
        updateTime();
    }
})