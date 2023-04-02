const title = document.querySelector('#blog-title').value.trim();
const content = document.querySelector('#blog-content').value.trim();

const commentButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs`, {
      method: 'PUT',
      body: JSON.stringify({ title, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.blog-list')
  .addEventListener('click', commentButtonHandler);
