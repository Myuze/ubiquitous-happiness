// Get modal element
var modal = document.getElementById('infoModal');
//Get modal open button
var loginModal = document.getElementById('loginModal');
//Get close button
var closeBtn = document.getElementById('closeBtn');
//Modal open on Forum page
var forumModal = document.getElementById('forumModal');

var commentModal = document.getElementById('commentModal');

//Listen for click to init on modal here
loginModal && loginModal.addEventListener('click', openModal);

forumModal && forumModal.addEventListener('click', openModal);

commentModal && commentModal.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);


//Function to open modal
function openModal() {
  modal.style.display = 'block';
}
//Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

var loginSubmit = document.getElementById('loginSubmit');
var form = document.getElementById('info');
//Need to send info to DB for login

//Blocks button from reloading page and calls functions to occur
loginSubmit.addEventListener('click', async function (e) {
  e.preventDefault();
  var email = document.getElementById('modalEmail').value;
  var password = document.getElementById('modalPassword').value;
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( {
      email,
      password
    })
  });

  if (response.ok) {
    closeModal();
    document.location.replace('/');
  } else {
    alert('Failed to log in user');
  }
});
