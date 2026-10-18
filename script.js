// Floating hearts
const heartsContainer = document.getElementById('hearts-container');
const heartEmojis = ['❤️', '🤍', '💕', '💗', '💖', '💓', '💞', '♡'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  
  const startX = Math.random() * 100;
  const size = 0.8 + Math.random() * 1.4;
  const duration = 8 + Math.random() * 10;
  const delay = Math.random() * 2;
  
  heart.style.left = startX + 'vw';
  heart.style.bottom = '-40px';
  heart.style.fontSize = size + 'rem';
  heart.style.animationDuration = duration + 's';
  heart.style.animationDelay = delay + 's';
  
  heartsContainer.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, (duration + delay) * 1000);
}

// Create hearts periodically
setInterval(createHeart, 600);
// Initial burst
for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 200);
}

// Soft particles
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  particle.style.animationDuration = (3 + Math.random() * 4) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  
  particlesContainer.appendChild(particle);
  
  setTimeout(() => particle.remove(), 7000);
}

setInterval(createParticle, 800);

// Music control
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    musicBtn.querySelector('.text').textContent = 'Musiqi';
  } else {
    bgMusic.play().catch(() => {
      // If no music.mp3 file, show a gentle message
      alert('Musiqi əlavə etmək üçün "music.mp3" faylını sayt qovluğuna qoyun 🎵');
      return;
    });
    musicBtn.classList.add('playing');
    musicBtn.querySelector('.text').textContent = 'Dayandır';
  }
  isPlaying = !isPlaying;
});

// Click anywhere to create heart
document.addEventListener('click', (e) => {
  // Don't trigger on music button
  if (e.target.closest('.music-control')) return;
  
  const heart = document.createElement('div');
  heart.classList.add('click-heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 1000);
});

// Subtle parallax on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelector('.hero').style.transform = `translateY(${scrolled * 0.15}px)`;
});
