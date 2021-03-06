async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#forum_title').value;
    const entry = document.querySelector('#entry').value;
  
    const response = await fetch('/user/newPost', {
      method: 'POST',
      body: JSON.stringify({
        title,
        entry,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/forum');
    } else {
    openModal();
    }
  }

  document
    .querySelector('.new-forum-post')
    .addEventListener('submit', newFormHandler);
