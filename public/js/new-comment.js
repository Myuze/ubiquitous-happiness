async function newCommentHandler(event) {
    event.preventDefault();
  
    const comment_entry = document.querySelector('#comment').value;
    const forum_id = window.location.pathname.split('/')[2]
  
    const response = await fetch(`/forum/${forum_id}`, {
      method: 'POST',
      body: JSON.stringify({
        comment_entry,
        forum_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/forum/${forum_id}`);
      console.log('succeed to add post')
    } else {
      alert('Failed to add post');
    }
  }

  document
    .querySelector('.new-comment')
    .addEventListener('submit', newCommentHandler);
