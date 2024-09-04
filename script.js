const btn = document.querySelector(".btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

img1.setAttribute("src", `./images/dice${randomNumber()}.png`);
img2.setAttribute("src", `./images/dice${randomNumber()}.png`);
