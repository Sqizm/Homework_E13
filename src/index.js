import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.textContent = 'Hello, World!';
  document.body.appendChild(container);

  // Fetch posts
  fetch('/api/posts')
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.textContent = `ID: ${post.id} Заголовок: ${post.title} Автор: ${post.author}`;
        container.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });

  // Fetch comments
  fetch('/api/comments')
    .then(response => response.json())
    .then(data => {
      data.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.textContent = `Комментарий: ${comment.body} к посту - ${comment.postId}`;
        container.appendChild(commentElement);
      });
    })
    .catch(error => {
      console.error('Error fetching comments:', error);
    });

  // Fetch profiles
  fetch('/api/profile')
    .then(response => response.json())
    .then(data => {
      const profileElement = document.createElement('div');
      profileElement.textContent = `Имя профиля: ${data.name}`;
      container.appendChild(profileElement);
    })
    .catch(error => {
      console.error('Error fetching profiles:', error);
    });
});