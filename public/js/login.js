async function loginHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#modalEmail').value;
    const password = document.querySelector('#modalPassword').value;
    
    const response = await fetch(`/api/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in user');
    }
  }

document
    .querySelector('#info')
    .addEventListener('submit', loginHandler);