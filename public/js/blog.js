const displayUpdateHandler = async (event) => {
  event.preventDefault();

  const oldPost = document.getElementById('old-post-form');
  
  oldPost.style.display = "block";
}

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update blog post');
    }
  }
};

const delButtonHandler = async (event) => {
  console.log(event.target);
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
.querySelector('.blog-update')
.addEventListener('click', displayUpdateHandler);

document
  .querySelector('.form-save')
  .addEventListener('click', updateButtonHandler);

document
  .querySelector('.blog-delete')
  .addEventListener('click', delButtonHandler);

