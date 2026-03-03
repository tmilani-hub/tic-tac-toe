const D_MENU = document.querySelector("#Dmenu");
const btn_croix = document.querySelector("#btn-croix");
const select_croix = document.querySelector("#select-croix");
const btn_rond = document.querySelector("#btn-rond");
const select_rond = document.querySelector("#select-rond");

let P1 = "rond";
let P2 = "croix";

document.addEventListener("DOMContentLoaded", () => {
	D_MENU.showModal();
});

btn_croix.addEventListener("click", () => {
	btn_croix.classList.add("selected");
	select_croix.classList.add("selected-1");
	btn_rond.classList.remove("selected");
	select_rond.classList.remove("selected-1");
	P1 = "croix";
	P2 = "rond";
});

btn_rond.addEventListener("click", () => {
	btn_rond.classList.add("selected");
	select_rond.classList.add("selected-1");
	btn_croix.classList.remove("selected");
	select_croix.classList.remove("selected-1");
	P1 = "rond";
	P2 = "croix";
});
