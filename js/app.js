const $D_MENU = document.querySelector("#Dmenu");
const $btn_croix = document.querySelector("#btn-croix");
const $select_croix = document.querySelector("#select-croix");
const $btn_rond = document.querySelector("#btn-rond");
const $select_rond = document.querySelector("#select-rond");
const $menu_game = document.querySelector("#menu-game");
const $P_ONE_is = document.querySelector("#P-ONE-is");
const $PLAYER_two = document.querySelector("#PLAYER-two");
const $btn_cpu = document.querySelector("#btn-cpu");
const $btn_pvp = document.querySelector("#btn-pvp");
const $button_refresh = document.querySelector("#refresh");
const $btn_game_S = document.querySelectorAll(".case");
const $turnof = document.querySelector("#turnof");
const $Xwinorlose = document.querySelector("#Xwinorlose");
const $Owinorlose = document.querySelector("#Owinorlose");
const $ties = document.querySelector("#ties");
const $QUIT = document.querySelector("#QUIT");
const $NEXT = document.querySelector("#NEXT");
// const $turnis = document.querySelector("#turnis");

let P1_is_X = false;
let ISPVP = true;
let turn_of_X = true;
let the_game = ["", "", "", "", "", "", "", "", ""];
let gameclick = 0;

document.addEventListener("DOMContentLoaded", () => {
	$D_MENU.showModal();
});

// ici faudra juste clear la grille pas besoin de remettre les comptur a zero
$btn_croix.addEventListener("click", () => {
	$btn_croix.classList.add("selected");
	$select_croix.classList.add("selected-1");
	$btn_rond.classList.remove("selected");
	$select_rond.classList.remove("selected-1");
	P1_is_X = true;
});

$btn_rond.addEventListener("click", () => {
	$btn_rond.classList.add("selected");
	$select_rond.classList.add("selected-1");
	$btn_croix.classList.remove("selected");
	$select_croix.classList.remove("selected-1");
	P1_is_X = false;
});

$btn_pvp.addEventListener("click", () => {
	ISPVP = true;
});

$btn_cpu.addEventListener("click", () => {
	ISPVP = false;
});

$menu_game.addEventListener("submit", (e) => {
	e.preventDefault();

	if (P1_is_X === false) {
		$P_ONE_is.textContent = "O";
		if (ISPVP) {
			$PLAYER_two.textContent = "X (P 2)";
		} else {
			$PLAYER_two.textContent = "X (CPU)";
		}
	} else {
		$P_ONE_is.textContent = "X";
		if (ISPVP) {
			$PLAYER_two.textContent = "O (P 2)";
		} else {
			$PLAYER_two.textContent = "O (CPU)";
		}
	}
	$D_MENU.close();
});

window.addEventListener("load", () => {
	for (let i = 0; i < $btn_game_S.length; i++) {
		const $btn_game = $btn_game_S[i];
		let ischeck = false;

		$btn_game.addEventListener("click", () => {
			if (ischeck) {
				return;
			}
			ischeck = true;
			if (turn_of_X) {
				$btn_game.innerHTML =
					'<svg class="croixxx" width="44" height="44" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9254 0.878511C25.7538 -0.293061 23.8543 -0.29306 22.6827 0.878513L15.2444 8.31685L7.80605 0.878512C6.63447 -0.293061 4.73498 -0.29306 3.5634 0.878513L0.878756 3.56316C-0.292817 4.73473 -0.292815 6.63423 0.878758 7.8058L8.31709 15.2441L0.878756 22.6825C-0.292817 23.8541 -0.292815 25.7535 0.878757 26.9251L3.56341 29.6098C4.73498 30.7813 6.63447 30.7813 7.80605 29.6098L15.2444 22.1714L22.6827 29.6098C23.8543 30.7813 25.7538 30.7813 26.9254 29.6098L29.61 26.9251C30.7816 25.7535 30.7816 23.8541 29.61 22.6825L22.1717 15.2441L29.61 7.8058C30.7816 6.63423 30.7816 4.73473 29.61 3.56316L26.9254 0.878511Z" fill="#31C3BD"/></svg>';
				turn_of_X = false;
				the_game[i] = "croix";
			} else {
				$btn_game.innerHTML =
					'<svg class="cercleee" width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z" fill="#F2B137"/></svg>';
				turn_of_X = true;
				the_game[i] = "cercle";
			}

			if (turn_of_X) {
				$turnof.innerHTML =
					'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z" fill="#A8BFC9"/></svg>';
			} else {
				$turnof.innerHTML =
					'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM4.74074 8C4.74074 6.19996 6.19996 4.74074 8 4.74074C9.80004 4.74074 11.2593 6.19996 11.2593 8C11.2593 9.80004 9.80004 11.2593 8 11.2593C6.19996 11.2593 4.74074 9.80004 4.74074 8Z" fill="#A8BFC9"/></svg>';
			}
			gameclick = 0;
			for (let i = 0; i < the_game.length; i++) {
				the_game[i] == "" ? null : gameclick++;
			}
			if (gameclick > 4) {
				// condition de victoire
				for (let i = 0; i < the_game.length; i++) {
					if (
						(the_game[i] == the_game[i + 1] &&
							the_game[i] == the_game[i + 2] &&
							the_game[i] != 1 &&
							the_game[i] != 2 &&
							the_game[i] != 4 &&
							the_game[i] != 5 &&
							the_game[i] != 7 &&
							the_game[i] != 8) ||
						(the_game[i] == the_game[i + 4] &&
							the_game[i] == the_game[i + 8] &&
							the_game[i] == 0) ||
						(the_game[i] == the_game[i + 3] &&
							the_game[i] == the_game[i + 6] &&
							the_game[i] != 3 &&
							the_game[i] != 4 &&
							the_game[i] != 5 &&
							the_game[i] != 6 &&
							the_game[i] != 7 &&
							the_game[i] != 8) ||
						(the_game[i] == the_game[i + 2] &&
							the_game[i] == the_game[i + 4] &&
							the_game[i] == 2) ||
						(the_game[i] == the_game[i - 1] &&
							the_game[i] == the_game[i - 2] &&
							the_game[i] != 0 &&
							the_game[i] != 1 &&
							the_game[i] != 3 &&
							the_game[i] != 4 &&
							the_game[i] != 6 &&
							the_game[i] != 7)
					) {
						$Xwinorlose.showModal();
					}
					if (gameclick === 9) {
						$ties.showModal();
					}
				}
			}

			$QUIT.addEventListener("click", () => {
				location.reload();
			});
			$NEXT.addEventListener("click", () => {
				$btn_game.innerHTML = "";
				ischeck = false;
				the_game = ["", "", "", "", "", "", "", "", ""];
				turn_of_X = true;
				if (turn_of_X) {
					$turnof.innerHTML =
						'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z" fill="#A8BFC9"/></svg>';
				} else {
					$turnof.innerHTML =
						'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM4.74074 8C4.74074 6.19996 6.19996 4.74074 8 4.74074C9.80004 4.74074 11.2593 6.19996 11.2593 8C11.2593 9.80004 9.80004 11.2593 8 11.2593C6.19996 11.2593 4.74074 9.80004 4.74074 8Z" fill="#A8BFC9"/></svg>';
				}
				$ties.close();
			});
			$button_refresh.addEventListener("click", () => {
				$btn_game.innerHTML = "";
				ischeck = false;
				the_game = ["", "", "", "", "", "", "", "", ""];
				turn_of_X = true;
				if (turn_of_X) {
					$turnof.innerHTML =
						'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z" fill="#A8BFC9"/></svg>';
				} else {
					$turnof.innerHTML =
						'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM4.74074 8C4.74074 6.19996 6.19996 4.74074 8 4.74074C9.80004 4.74074 11.2593 6.19996 11.2593 8C11.2593 9.80004 9.80004 11.2593 8 11.2593C6.19996 11.2593 4.74074 9.80004 4.74074 8Z" fill="#A8BFC9"/></svg>';
				}
			});
		});
	}
});

/*
	$btn_croix.innerHTML = `<svg>`

	CERCLE

	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z" fill="#F2B137"/></svg>


	CROIX

	<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9254 0.878511C25.7538 -0.293061 23.8543 -0.29306 22.6827 0.878513L15.2444 8.31685L7.80605 0.878512C6.63447 -0.293061 4.73498 -0.29306 3.5634 0.878513L0.878756 3.56316C-0.292817 4.73473 -0.292815 6.63423 0.878758 7.8058L8.31709 15.2441L0.878756 22.6825C-0.292817 23.8541 -0.292815 25.7535 0.878757 26.9251L3.56341 29.6098C4.73498 30.7813 6.63447 30.7813 7.80605 29.6098L15.2444 22.1714L22.6827 29.6098C23.8543 30.7813 25.7538 30.7813 26.9254 29.6098L29.61 26.9251C30.7816 25.7535 30.7816 23.8541 29.61 22.6825L22.1717 15.2441L29.61 7.8058C30.7816 6.63423 30.7816 4.73473 29.61 3.56316L26.9254 0.878511Z" fill="#31C3BD"/></svg>


	REJOUER

	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0185 2.12187e-07H13.5723C13.3701 -0.000215172 13.2061 0.163569 13.2058 0.365877C13.2058 0.371815 13.206 0.377754 13.2062 0.383692L13.3283 2.90994C11.8923 1.21674 9.78449 0.241754 7.56526 0.244185C3.39643 0.244215 -0.00304411 3.64864 2.04557e-06 7.82021C0.0030482 11.9985 3.38911 15.3846 7.56526 15.3846C9.43858 15.3873 11.2458 14.6918 12.6346 13.4337C12.7852 13.2988 12.7981 13.0673 12.6632 12.9165C12.6587 12.9114 12.654 12.9065 12.6492 12.9017L11.6121 11.8638C11.4758 11.7276 11.2574 11.7202 11.1124 11.847C8.88621 13.8069 5.49375 13.5899 3.53511 11.3622C1.57646 9.13458 1.79339 5.7399 4.01957 3.78C6.24575 1.82009 9.63821 2.03714 11.5969 4.2648C11.7504 4.43941 11.8924 4.62381 12.0221 4.81683L8.92489 4.66818C8.72295 4.65858 8.55144 4.81458 8.54184 5.01667C8.54157 5.02261 8.54141 5.02855 8.54144 5.03449V6.48169C8.54144 6.684 8.70532 6.848 8.90751 6.848H15.0186C15.2208 6.848 15.3846 6.684 15.3846 6.48169V0.366308C15.3846 0.164 15.2207 2.12187e-07 15.0185 2.12187e-07Z" fill="#1F3641"/></svg>

	TURN_IS_CERCLE


	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8ZM4.74074 8C4.74074 6.19996 6.19996 4.74074 8 4.74074C9.80004 4.74074 11.2593 6.19996 11.2593 8C11.2593 9.80004 9.80004 11.2593 8 11.2593C6.19996 11.2593 4.74074 9.80004 4.74074 8Z" fill="#A8BFC9"/></svg>


	TURN_IS_CROIX


	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z" fill="#A8BFC9"/></svg>

*/
