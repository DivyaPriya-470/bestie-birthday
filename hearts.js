const hearts = document.querySelector('.hearts');

for (let i = 0; i < 25; i++) {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 5) + 's';
  hearts.appendChild(heart);
}
