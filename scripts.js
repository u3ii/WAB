

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
  sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
});

sideMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => sideMenu.style.left = '-250px');
});

document.querySelectorAll('.rect, .info-box, .product-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(0.98)';
    el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    el.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
    el.style.boxShadow = 'none';
  });
});

const sliderText = document.querySelector('.slider-text');
const sliderMessages = [
  'أهلاً بكم في WAB Cafe، وجهتكم لكل فنجان قهوة يروي لحظاتكم',
  'استمتع بأفضل تجربة قهوة متقنة في حائل',
  'منتجات مميزة وحلويات تضيف لمسات لذيذة'
];
let currentMessage = 0;
function showNextMessage() {
  sliderText.textContent = sliderMessages[currentMessage];
  currentMessage = (currentMessage + 1) % sliderMessages.length;
}
setInterval(showNextMessage, 4000);
showNextMessage();

const mainVideo = document.querySelector('.main-video');
if (mainVideo) {
  mainVideo.play().catch(() => {
    mainVideo.muted = true;
    mainVideo.play();
  });
}

