
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

if (menuToggle && sideMenu) {
  menuToggle.addEventListener('click', () => {
    sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
  });

  sideMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => sideMenu.style.left = '-250px');
  });
}

// هذا الجزء هو اللي يضيف الشدو للمنتجات والمربعات
document.querySelectorAll('.rect, .info-box, .product-card').forEach(el => {
  const activateEffect = () => {
    // إضافة الشدو (الظل) عند اللمس
    el.style.boxShadow = '0 8px 20px rgba(92, 61, 46, 0.4)';
    el.style.transform = 'scale(0.98) translateY(-2px)';
    el.style.transition = 'all 0.3s ease';
  };

  const deactivateEffect = () => {
    // إزالة الشدو عند رفع الإصبع
    el.style.boxShadow = 'none';
    el.style.transform = 'scale(1) translateY(0)';
  };

  // للكمبيوتر (الماوس)
  el.addEventListener('mouseenter', activateEffect);
  el.addEventListener('mouseleave', deactivateEffect);
  
  // للجوال (اللمس)
  el.addEventListener('touchstart', activateEffect, {passive: true});
  el.addEventListener('touchend', deactivateEffect);
});

const sliderText = document.querySelector('.slider-text');
const sliderMessages = [
  'أهلاً بكم في WAB Cafe، وجهتكم لكل فنجان قهوة يروي لحظاتكم',
  'استمتع بأفضل تجربة قهوة متقنة في حائل',
  'منتجات مميزة وحلويات تضيف لمسات لذيذة'
];
let currentMessage = 0;

function showNextMessage() {
  if (sliderText) {
    sliderText.textContent = sliderMessages[currentMessage];
    currentMessage = (currentMessage + 1) % sliderMessages.length;
  }
}

if (sliderText) {
  setInterval(showNextMessage, 4000);
  showNextMessage();
}

const mainVideo = document.querySelector('.main-video');
if (mainVideo) {
  mainVideo.play().catch(() => {
    mainVideo.muted = true;
    mainVideo.play();
  });
}
