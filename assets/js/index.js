// const iconeNavBar = document.querySelector("#iconeNavBar");
// const btnNavBar = document.querySelector("#clicouNavBar");

// iconeNavBar.addEventListener("click", () => {
//   if (btnNavBar.classList.contains("navbar-toggler-icon")) {
//     console.log("entrei");
//     btnNavBar.classList.remove("navbar-toggler-icon");
//     btnNavBar.classList.add("bi-x-lg");
//   }
// });

// iconeNavBar.addEventListener("click", () => {
//   if (btnNavBar.classList.contains("bi-x-lg")) {
//     console.log("entrei aq tb");
//     btnNavBar.classList.add("navbar-toggler-icon");
//     btnNavBar.classList.remove("bi-x-lg");
//   }
// });

const MenuCancelNavBar = document.querySelector("#MenuCancelNavBar");
const MenuBurguerNavBar = document.querySelector("#MenuBurguerNavBar");

function clicouCancelMenu() {
  MenuCancelNavBar.classList.add("d-none");
  MenuBurguerNavBar.classList.remove("d-none");
}

function clicouBurgerMenu() {
  MenuCancelNavBar.classList.remove("d-none");
  MenuBurguerNavBar.classList.add("d-none");
}
