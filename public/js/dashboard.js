const newPostHandler = async (event) => {
  event.preventDefault();

  const newPost = document.querySelector('#new-post');
  const postForm = document.getElementById('new-post-form');
  
  postForm.style.display = "block";
}

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog post');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.new-post')
  .addEventListener('click', newPostHandler);
