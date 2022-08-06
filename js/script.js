// CodeRax
// YouTube : https://www.youtube.com/channel/UCPNW8Pu3MiOx2hJyLt2d8_A
// Telegram : https://t.me/code_rax
// GitHub : https://github.com/code-rax

alert("please follow coderax YouTube and telegram channels");
const $ = document;

const hamburgerMenu = $.querySelector("header .part4");
const menus = $.querySelector(".menus");
const line1 = $.querySelector("header .part4 div:nth-child(1)");
const line2 = $.querySelector("header .part4 div:nth-child(2)");
const line3 = $.querySelector("header .part4 div:nth-child(3)");

hamburgerMenu.addEventListener("click", () => {
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
  menus.classList.toggle("active");
});
