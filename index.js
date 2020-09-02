let allWords = [
  "rainbow",
  "cardboard",
  "scarecrow",
  "butcher",
  "helicopter",
  "electricity",
  "elevator"
];
let word = allWords[Math.floor(Math.random() * allWords.length)].toUpperCase();
let chances = 5;

let cont = document.getElementById("image");

for (let i = 1; i <= chances; i++) {
  let pic = document.createElement("img");
  pic.setAttribute("src", "alert.png");
  pic.id = i;
  pic.className = "image";

  cont.appendChild(pic);
}

let wordElement = document.getElementById("word");

for (let i = 0; i < word.length; i++) {
  let letter = document.createElement("div");
  letter.className = word[i];
  wordElement.appendChild(letter);
}

let alpha1 = "QWERTYUIOP";
let alpha2 = "ASDFGHJKL";
let alpha3 = "ZXCVBNM";

let a = document.getElementById("alpha1");

for (let i = 0; i < alpha1.length; i++) {
  let letter = document.createElement("div");
  letter.id = alpha1[i];
  letter.className = "alpha";
  letter.innerHTML = alpha1[i];
  letter.addEventListener("click", (event) => handleClick(alpha1[i]));

  a.appendChild(letter);
}

let b = document.getElementById("alpha2");

for (let i = 0; i < alpha2.length; i++) {
  let letter = document.createElement("div");
  letter.id = alpha2[i];
  letter.className = "alpha";
  letter.innerHTML = alpha2[i];
  letter.addEventListener("click", (event) => handleClick(alpha2[i]));

  b.appendChild(letter);
}

let c = document.getElementById("alpha3");

for (let i = 0; i < alpha3.length; i++) {
  let letter = document.createElement("div");
  letter.id = alpha3[i];
  letter.className = "alpha";
  letter.innerHTML = alpha3[i];
  letter.addEventListener("click", (event) => handleClick(alpha3[i]));

  c.appendChild(letter);
}

const handleClick = (letter) => {
  let elements = document.getElementsByClassName(letter);

  if (elements.length === 0) {
    let msg = document.getElementById("message");

    if (chances === 5) {
      msg.innerHTML = "1 life lost";
    }

    if (chances > 2 && chances < 5) {
      msg.innerHTML = 6 - chances + " lives lost";
    }

    if (chances === 2) {
      msg.innerHTML = "Last life left";
    }

    let img = document.getElementById(chances);
    img.removeAttribute("src");
    if (chances === 1) {
      msg.innerHTML = "You Lose!!";
      let game = document.getElementById("btn");
      game.classList.remove("hide");
      return;
    }
    chances--;
  } else if (chances > 1) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = letter;
    }
  }
};

let btn = document.getElementById("retry");
btn.addEventListener("click", () => location.reload());
