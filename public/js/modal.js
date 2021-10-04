// Get modal element
var modal = document.getElementById('infoModal');
//Get modal open button
<<<<<<< HEAD
var modalBtn = document.getElementById('modalBtn');
=======
var loginModal = document.getElementById("loginModal");
>>>>>>> dc913c030b2c090160df0c65d3f4ae656988859b
//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for click to init on modal here
<<<<<<< HEAD
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
=======
loginModal.addEventListener("click", openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);

>>>>>>> dc913c030b2c090160df0c65d3f4ae656988859b

//Function to open modal
function openModal() {
  modal.style.display = 'block';
}
//Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

var starting = document.getElementById('submit');
var form = document.getElementById('info');
//Need to send info to DB for login

//Blocks button from reloading page and calls functions to occur
submit.addEventListener('click', function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify( {
      email, password
    })
  })
  .then(res => closeModal())

});
