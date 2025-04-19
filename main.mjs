import buildDocsIndex from './modules/buildDocsIndex.mjs';
import playground from './modules/playground.mjs';
import startAnimations from './modules/startAnimations.mjs';
import toggleOnClick from './modules/toggle.mjs';
import darkModeControl from './modules/darkMode.mjs';

buildDocsIndex();
playground();
darkModeControl();

toggleOnClick('.callout-showList', 'html', 'animationList-active');
toggleOnClick('.callout-hideList', 'html', 'animationList-active');
toggleOnClick('.hamburger', 'html', 'hamburger-active');
toggleOnClick('.docs-index', 'html', 'hamburger-active');

requestAnimationFrame(startAnimations);

document.querySelectorAll('.copy-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('copied');
    document.querySelector('.copied .tooltip').textContent = 'Copied!';
    setTimeout(() => {
      icon.children[0].textContent = 'Copy class name to clipboard'
      icon.classList.remove('copied')
    }, 750)
  })
})




//..\\
document.addEventListener('DOMContentLoaded', function () {
  // دکمه را دریافت می‌کنیم
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const scrollProgress = document.getElementById('scrollProgress');

  // زمانی که کاربر اسکرول می‌کند
  window.onscroll = function() {
    // محاسبه درصد اسکرول
    let scrollPercentage = (document.documentElement.scrollTop || document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    
    // به‌روزرسانی نوار پیشرفت
    scrollProgress.style.width = scrollPercentage + '%';

    // نمایش یا پنهان کردن دکمه
    if (document.documentElement.scrollTop > 1000) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };

  // تابع برای اسکرول به بالای صفحه
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // اسکرول نرم
    });
  }

  // اتصال تابع به رویداد کلیک دکمه
  scrollToTopBtn.addEventListener('click', scrollToTop);
});

//..\\
