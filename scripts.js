
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
  sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
});

sideMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => sideMenu.style.left = '-250px');
});

document.querySelectorAll('.rect, .info-box, .product-card').forEach(el => {
  el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  el.style.boxShadow = '0 4px 8px rgba(92,61,46,0.2)';

  el.addEventListener('mouseenter', () => {
    el.style.transform = 'translateY(-3px)';
    el.style.boxShadow = '0 8px 15px rgba(92,61,46,0.3)';
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = '0 4px 8px rgba(92,61,46,0.2)';
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
