// Get modal element
var modal = document.getElementById("infoModal");
//Get modal open button
var modalBtn = document.getElementById("modalBtn");
//Get close button
var closeBtn = document.getElementById("closeBtn");

//Listen for click to init on modal here
modalBtn.addEventListener("click", openModal);
//Listen for close click
closeBtn.addEventListener("click", closeModal);

//Function to open modal
function openModal() {
  modal.style.display = "block";
}
//Function to close modal
function closeModal() {
  modal.style.display = "none";
}

var starting = document.getElementById("submit");
var form = document.getElementById("info");
//Need to send info to DB for login

//Blocks button from reloading page and calls functions to occur
submit.addEventListener("click", function (e) {
  e.preventDefault();
  storeUser();
  closeModal();
});
