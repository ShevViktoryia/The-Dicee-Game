const btn = document.querySelector(".btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const header = document.querySelector("h1");

const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const checkWinner = (first_num, second_num) => {
  header.textContent = "Draw!";
  if (first_num > second_num) {
    header.textContent = "Player 1 Wins!";
  } else if (first_num < second_num) {
    header.textContent = "Player 2 Wins!";
  } else {
    header.textContent = "Draw!";
  }
};

img1.setAttribute("src", `./images/dice${randomNumber()}.png`);
img2.setAttribute("src", `./images/dice${randomNumber()}.png`);

btn.onclick = () => {
  const first_num = randomNumber();
  const second_num = randomNumber();
  img1.setAttribute("src", `./images/dice${first_num}.png`);
  img2.setAttribute("src", `./images/dice${second_num}.png`);
  checkWinner(first_num, second_num);
};
