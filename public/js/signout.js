async function signOutHandler(event) {
    event.preventDefault();
    
    const response = await fetch(`/api/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign out user');
      const test = await response.json();
      console.log(test)
    }
  }

document
    .querySelector('#signout-btn')
    .addEventListener('click', signOutHandler);