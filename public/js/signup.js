async function signUpHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    const twitch_link = document.querySelector('#twitch_link'.value);
    const youtube_link = document.querySelector('#youtube_link'.value);
    
    const response = await fetch(`/api/users/register`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
        twitch_link,
        youtube_link
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add user');
      const test = await response.json();
      console.log(test)
    }
  }

document
    .querySelector('#register')
    .addEventListener('submit', signUpHandler);
    