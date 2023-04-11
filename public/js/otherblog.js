const commentButtonHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#blog-comment').value.trim();
  
  if (event.target.hasAttribute('data-id')) {
    const blog_id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/otherblog/'+blog_id);
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.blog-list')
  .addEventListener('submit', commentButtonHandler);
