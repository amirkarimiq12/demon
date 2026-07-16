document.addEventListener('DOMContentLoaded', () => {

  // ۱. سیستم مدیریت تب‌ها (جزوات / کلاس‌ها)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // غیر فعال کردن دکمه‌های قبلی
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // پنهان کردن محتواهای قبلی
      tabContents.forEach(content => content.classList.remove('active'));

      // فعال کردن تب کلیک شده
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // ۲. مدیریت پلیر ویدیوها و لیست فصل‌ها
  const chapterLinks = document.querySelectorAll('.chapter-link');
  const videoPlayer = document.getElementById('video-player');
  const playingTitle = document.getElementById('playing-title');

  chapterLinks.forEach(link => {
    link.addEventListener('click', () => {
      // غیر فعال کردن فعال‌های قبلی در منو
      chapterLinks.forEach(item => item.classList.remove('active'));

      // فعال کردن دکمه کلیک شده
      link.classList.add('active');

      // تغییر آدرس آی‌فریم به ویدیو جدید
      const newVideoUrl = link.getAttribute('data-video');
      videoPlayer.setAttribute('src', newVideoUrl);

      // تغییر عنوان زیر ویدیو
      playingTitle.textContent = `در حال پخش: ${link.textContent.trim().replace(/\s+/g, ' ')}`;
    });
  });

  // ۳. افکت موقت دانلود دکمه‌ها
  const downloadButtons = document.querySelectorAll('.download-btn');
  downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
      const originalText = button.textContent;
      button.textContent = '⚡ شروع دانلود...';
      button.style.backgroundColor = '#10b981';

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
      }, 2000);
    });
  });

});
