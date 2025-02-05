// MENU
function openMenuMobile() {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('overlay_menu_mobile').style.display = 'block';
}

function closeMenuMobile() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('overlay_menu_mobile').style.display = 'none';
}

//FORM

function openPopup() {
  document.querySelector(".popup").classList.add("open");
  document.querySelector(".overlay_popup").classList.add("open");
}

function closePopup() {
  document.querySelector(".popup").classList.remove("open")
  document.querySelector(".overlay_popup").classList.remove("open");
}