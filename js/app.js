document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
document.getElementById('loading-video').addEventListener('ended', () => {
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
});
window.addEventListener('load', () => {
  const bannerScroll = document.getElementById('banner-scroll');
  const indicators = document.getElementById('banner-indicators');
  const banners = bannerScroll.querySelectorAll('.banner-item');

  // 인디케이터 생성
  banners.forEach((_, index) => {
    const dot = document.createElement('div');
    if (index === 0) dot.classList.add('active');
    indicators.appendChild(dot);

    // 인디케이터 클릭 시 배너로 이동
    dot.addEventListener('click', () => {
      const scrollX = bannerScroll.offsetWidth * index;
      bannerScroll.scrollTo({ left: scrollX, behavior: 'smooth' });
    });
  });

  const indicatorDots = indicators.querySelectorAll('div');

  // 배너 스크롤 시 활성화된 인디케이터 갱신
  bannerScroll.addEventListener('scroll', () => {
    const index = Math.round(bannerScroll.scrollLeft / bannerScroll.offsetWidth);
    indicatorDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  });
});

document.querySelectorAll('.restaurant-image').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.src = img.dataset.animated;
  });
  img.addEventListener('mouseleave', () => {
    img.src = img.dataset.static;
  });
});
document.querySelectorAll('.icon-card img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.src = img.src.replace('.png', '.gif');
  });
  img.addEventListener('mouseleave', () => {
    img.src = img.src.replace('.gif', '.png');
  });
});

window.addEventListener('load', () => {
  const video = document.getElementById('loadingVideo');
  const source = video.querySelector('source');

  const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    source.src = 'video/loading_sp.webm';
  } else {
    source.src = 'video/loading.webm';
  }

  video.load();   // ✅ src 설정 후 로드
});
