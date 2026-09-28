const postForm = document.querySelector('#post-form');
const authorInput = document.querySelector('#author-name');
const contentInput = document.querySelector('#post-content');
const postList = document.querySelector('#post-list');
const feedCount = document.querySelector('#feed-count');
const emptyMessage = document.querySelector('#empty-message');

const posts = [
  {
    author: 'Morgan Chen',
    content: 'Found a new little coffee shop on my walk this morning. The sunny window seat is already my favorite spot.',
    time: 'A few minutes ago',
    likes: 0,
    liked: false
  },
  {
    author: 'Alex Rivera',
    content: 'Quick reminder: taking a break is part of getting things done. Hope everyone is having a gentle day.',
    time: 'Earlier today',
    likes: 0,
    liked: false
  }
];

function createPostElement(post) {
  const article = document.createElement('article');
  article.className = 'post';

  const topLine = document.createElement('div');
  topLine.className = 'post-topline';

  const avatar = document.createElement('span');
  avatar.className = 'avatar';
  avatar.setAttribute('aria-hidden', 'true');
  avatar.textContent = post.author.trim().charAt(0).toUpperCase();

  const authorDetails = document.createElement('div');
  const author = document.createElement('p');
  author.className = 'post-author';
  author.textContent = post.author;

  const time = document.createElement('p');
  time.className = 'post-time';
  time.textContent = post.time;

  authorDetails.append(author, time);
  topLine.append(avatar, authorDetails);

  const content = document.createElement('p');
  content.className = 'post-content';
  content.textContent = post.content;

  const likeButton = document.createElement('button');
  likeButton.className = 'like-button';
  likeButton.type = 'button';
  likeButton.textContent = `${post.liked ? 'Liked' : 'Like'} ${post.likes}`;
  likeButton.setAttribute('aria-pressed', String(post.liked));
  likeButton.addEventListener('click', () => {
    if (post.liked) {
      return;
    }

    post.liked = true;
    post.likes += 1;
    likeButton.textContent = `Liked ${post.likes}`;
    likeButton.classList.add('liked');
    likeButton.setAttribute('aria-pressed', 'true');
  });

  article.append(topLine, content, likeButton);
  return article;
}

function renderPosts() {
  postList.replaceChildren(...posts.map(createPostElement));
  feedCount.textContent = `${posts.length} ${posts.length === 1 ? 'post' : 'posts'}`;
  emptyMessage.hidden = posts.length > 0;
}

postForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const author = authorInput.value.trim();
  const content = contentInput.value.trim();

  if (!author || !content) {
    return;
  }

  posts.unshift({
    author,
    content,
    time: 'Just now',
    likes: 0,
    liked: false
  });

  renderPosts();
  postForm.reset();
  authorInput.focus();
});

renderPosts();