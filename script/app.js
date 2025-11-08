if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function (){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})
  const btn = document.getElementById('playstationBtn');
  const submenu = document.getElementById('playstationSubmenu');
  const chevron = document.getElementById('chevronIcon');

  btn.addEventListener('click', () => {
    submenu.classList.toggle('hidden');
    chevron.classList.toggle('rotate-90');
  });

    const mobileGamesBtn = document.getElementById('mobileGamesBtn');
  const mobileGamesSubmenu = document.getElementById('mobileGamesSubmenu');
  const mobileGamesChevron = document.getElementById('mobileGamesChevron');

  mobileGamesBtn.addEventListener('click', () => {
    mobileGamesSubmenu.classList.toggle('hidden');
    mobileGamesChevron.classList.toggle('rotate-90');
  });

    const giftCardBtn = document.getElementById('giftCardBtn');
  const giftCardSubmenu = document.getElementById('giftCardSubmenu');
  const giftCardChevron = document.getElementById('giftCardChevron');

  giftCardBtn.addEventListener('click', () => {
    giftCardSubmenu.classList.toggle('hidden');
    giftCardChevron.classList.toggle('rotate-90');
  });

    const steamOriginBtn = document.getElementById('steamOriginBtn');
  const steamOriginSubmenu = document.getElementById('steamOriginSubmenu');
  const steamOriginChevron = document.getElementById('steamOriginChevron');

  steamOriginBtn.addEventListener('click', () => {
    steamOriginSubmenu.classList.toggle('hidden');
    steamOriginChevron.classList.toggle('rotate-90');
  });

    const xboxBtn = document.getElementById('xboxBtn');
  const xboxSubmenu = document.getElementById('xboxSubmenu');
  const xboxChevron = document.getElementById('xboxChevron');

  xboxBtn.addEventListener('click', () => {
    xboxSubmenu.classList.toggle('hidden');
    xboxChevron.classList.toggle('rotate-90');
  });
  const blizzardBtn = document.getElementById('blizzardBtn');
  const blizzardSubmenu = document.getElementById('blizzardSubmenu');
  const blizzardChevron = document.getElementById('blizzardChevron');

  blizzardBtn.addEventListener('click', () => {
    blizzardSubmenu.classList.toggle('hidden');
    blizzardChevron.classList.toggle('rotate-90');
  });

  const bulkAccountsBtn = document.getElementById('bulkAccountsBtn');
  const bulkAccountsSubmenu = document.getElementById('bulkAccountsSubmenu');
  const bulkAccountsChevron = document.getElementById('bulkAccountsChevron');

  bulkAccountsBtn.addEventListener('click', () => {
    bulkAccountsSubmenu.classList.toggle('hidden');
    bulkAccountsChevron.classList.toggle('rotate-90');
  });
    const premiumBtn = document.getElementById('premiumBtn');
  const premiumSubmenu = document.getElementById('premiumSubmenu');
  const premiumChevron = document.getElementById('premiumChevron');

  premiumBtn.addEventListener('click', () => {
    premiumSubmenu.classList.toggle('hidden');
    premiumChevron.classList.toggle('rotate-90');
  });

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  const overlay = document.getElementById('overlay');

  const mainMenu = document.getElementById('mainMenu');
  const subMenu = document.getElementById('subMenu');
  const openSubMenu = document.getElementById('openSubMenu');
  const backToMain = document.getElementById('backToMain');
  const menuTitle = document.getElementById('menuTitle');

  // باز کردن منو
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    mainMenu.classList.remove('hidden');
    subMenu.classList.add('hidden');
    menuTitle.textContent = "منو";
  });

  // بستن منو
  closeMenu.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  function closeSidebar() {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }

  // باز کردن زیرمنو
  openSubMenu.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    subMenu.classList.remove('hidden');
    menuTitle.textContent = "دسته محصولات";
  });

  // برگشت به منوی اصلی
  backToMain.addEventListener('click', () => {
    subMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    menuTitle.textContent = "منو";
  });

  document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("[data-menu]");
  const panels = document.querySelectorAll("[data-panel]");

  // 🔹 مرحله ۱: نمایش پیش‌فرض اولین پنل
  if (panels.length > 0) {
    panels.forEach((panel, index) => {
      if (index === 0) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  }

  // 🔹 مرحله ۲: هنگام هاور روی هر منو، نمایش پنل مربوطه
  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const target = item.getAttribute("data-menu");
      
      panels.forEach(panel => {
        if (panel.getAttribute("data-panel") === target) {
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      });
    });
  });
});

  const items = document.querySelectorAll('.fade-item');
  let current = 0;

  items.forEach((item, i) => item.style.opacity = i === 0 ? 1 : 0);

  setInterval(() => {
    items[current].style.opacity = 0;
    current = (current + 1) % items.length;
    items[current].style.opacity = 1;
  }, 3000);
  
const marqueeContainer = document.querySelector('.swiper');
if (marqueeContainer) {
  const swiperMarquee = new Swiper(marqueeContainer, {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 12,
    loop: true,
    speed: 8000,
    allowTouchMove: false,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1.5, spaceBetween: 10 },
      400: { slidesPerView: 1, spaceBetween: 8 },
      640: { slidesPerView: 2.5, spaceBetween: 12 },
      1024:{ slidesPerView: 4, spaceBetween: 16 },
    },
  });
}

const galleryContainer = document.querySelector('.mySwiper');
if (galleryContainer) {
  const paginationEl = galleryContainer.querySelector('.swiper-pagination');
  const swiperGallery = new Swiper(galleryContainer, {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 700,
    pagination: {
      el: paginationEl || undefined,
      clickable: true
    },
    effect: 'fade',
    fadeEffect: { crossFade: true }
  });
}

// Image Gallery
document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll('.reveal-card.show'));

  const images = [
    [
      "./img/Image-Game/Red-Dead-Redemption-3.jpeg",
      "./img/Image-Game/Call-of-Duty-1.jpeg",
      "./img/Image-Game/last-of-us-1.jpg",
      "./img/Image-Game/Halo.jpeg",
      "./img/Image-Game/call-of-dudy-2.jpeg"
    ],
    [
      "./img/Image-Game/halo-2.jpeg",
      "./img/Image-Game/god-of-war-3.jpeg",
      "./img/Image-Game/GTA-5-Ambient-Soundtrack.jpeg",
      "./img/Image-Game/Ratchet-Clank.jpeg",
      "./img/Image-Game/evil-1.jpeg"
    ],
    [
      "./img/Image-Game/Unchurded.jpeg",
      "./img/Image-Game/Red-Dead-Redemption-4.jpeg",
      "./img/Image-Game/last-of-us-2.png",
      "./img/Image-Game/Ac-1.jpeg",
      "./img/Image-Game/forza-1.jpeg"
    ]
  ];

  let currentGroup = 0;
  const intervalMs = 7000;

  setInterval(() => {
    currentGroup = (currentGroup + 1) % images.length;

    cards.forEach((card, i) => {
      const oldImg = card.querySelector('img.card-img') || card.querySelector('img');
      if (!oldImg) return;

      const newImg = document.createElement('img');
      newImg.src = images[currentGroup][i];
      newImg.alt = oldImg.alt || '';
      newImg.decoding = 'async';
      newImg.loading = 'lazy';

      newImg.className = oldImg.className; 

      newImg.style.position = 'absolute';
      newImg.style.inset = '0';
      newImg.style.width = '100%';
      newImg.style.height = '100%';
      newImg.style.objectFit = 'cover';
      newImg.style.zIndex = '8';

      newImg.style.opacity = '0';
      newImg.style.transform = 'scale(1.03)';
      newImg.style.willChange = 'opacity, transform';
      newImg.style.transition = 'opacity 800ms cubic-bezier(.22,.9,.31,1), transform 800ms cubic-bezier(.22,.9,.31,1)';

      const darkOverlay = document.createElement('div');
      darkOverlay.className = 'temp-dark-overlay';
      darkOverlay.style.position = 'absolute';
      darkOverlay.style.inset = '0';
      darkOverlay.style.zIndex = '9';
      darkOverlay.style.background = 'rgba(0,0,0,0.35)';
      darkOverlay.style.opacity = '0';
      darkOverlay.style.transition = 'opacity 150ms ease';

      card.appendChild(newImg);
      card.appendChild(darkOverlay);

      newImg.onload = () => {
        requestAnimationFrame(() => {
          darkOverlay.style.opacity = '1';
        });

        setTimeout(() => {
          darkOverlay.style.opacity = '0';
          newImg.style.opacity = '1';
          newImg.style.transform = 'scale(1)';
        }, 80);

        setTimeout(() => {
          if (oldImg && oldImg.parentNode) oldImg.remove();

          if (darkOverlay && darkOverlay.parentNode) darkOverlay.remove();

          newImg.style.position = '';
          newImg.style.inset = '';
          newImg.style.width = '';
          newImg.style.height = '';
          newImg.style.objectFit = '';
          newImg.style.zIndex = '';
          newImg.style.opacity = '';
          newImg.style.transform = '';
          newImg.style.willChange = '';
          newImg.style.transition = '';

          if (!newImg.classList.contains('card-img')) newImg.classList.add('card-img');
        }, 950);
      };

      newImg.onerror = () => {
        if (newImg && newImg.parentNode) newImg.remove();
        if (darkOverlay && darkOverlay.parentNode) darkOverlay.remove();
      };
    });
  }, intervalMs);
});
// Mobile Galley
  (function () {
    const MOBILE_MAX = 768;
    const containerSelector = '.flex.justify-between.mt-7.mx-2';

    let swiperInstance = null;
    let isSwiperActive = false;

    function computeCardWidth() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const containerPadding = 24;
      const maxCard = 305;
      const cardWidth = Math.min(maxCard, Math.max(160, vw - containerPadding - 40));
      return cardWidth;
    }

    function computeSwiperParams() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const cardW = computeCardWidth();
      if (vw <= 420) {
        return { slidesPerView: 1.02, spaceBetween: 8 };
      }
      if (vw <= 768) {
        const approx = Math.floor(vw / (cardW + 12)) || 1;
        const slidesPerView = approx >= 2 ? Math.min(2, vw / (cardW)) : Math.min(1.25, vw / (cardW));
        const remaining = Math.max(0, vw - slidesPerView * cardW - 24);
        const gapsCount = Math.max(1, Math.floor(slidesPerView));
        const computedGap = gapsCount ? Math.floor(remaining / (gapsCount + 1)) : 8;
        const spaceBetween = Math.min(12, Math.max(4, computedGap));
        return { slidesPerView: parseFloat(slidesPerView.toFixed(2)), spaceBetween };
      }
      return { slidesPerView: 3, spaceBetween: 12 };
    }

    function activateSwiper() {
      if (isSwiperActive) return;
      const container = document.querySelector(containerSelector);
      if (!container) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'swiper-wrapper';
      const children = Array.from(container.children);
      children.forEach(child => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.style.display = 'flex';
        slide.style.justifyContent = 'center';
        slide.style.alignItems = 'flex-start';
        child.style.margin = '0';
        child.style.padding = '0';
        slide.appendChild(child);
        wrapper.appendChild(slide);
      });

      container.classList.add('swiper', 'mySwiper-mobile');
      container.innerHTML = '';
      container.appendChild(wrapper);

      const styleId = 'swiper-mobile-inline-style';
      let style = document.getElementById(styleId);
      if (style) style.remove();
      style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        /* اندازه کارت واکنش‌گرا */
        .mySwiper-mobile .swiper-slide > .rounded-2xl {
          width: min(305px, calc(100vw - 48px));
          box-sizing: border-box;
          margin: 0;
        }
        @media (max-width: 420px) {
          .mySwiper-mobile .swiper-slide > .rounded-2xl {
            width: calc(100vw - 36px);
          }
        }
        @media (min-width: 421px) and (max-width: 768px) {
          .mySwiper-mobile .swiper-slide > .rounded-2xl {
            width: min(280px, calc(100vw - 64px));
          }
        }
        /* تصویر تمام‌عرض داخل کارت */
        .mySwiper-mobile .swiper-slide > .rounded-2xl img {
          width: 100%;
          object-fit: cover;
          display: block;
        }
        .mySwiper-mobile .rounded-2xl > * { margin-top: 0; margin-bottom: 0; }
        .mySwiper-mobile .swiper-slide { padding: 0; }
        .mySwiper-mobile .swiper-wrapper { align-items: start; gap: 6px; }
        .mySwiper-mobile { padding-left: 12px; padding-right: 12px; padding-bottom: 12px; }
      `;
      document.head.appendChild(style);

      const params = computeSwiperParams();
      swiperInstance = new Swiper('.mySwiper-mobile', {
        slidesPerView: params.slidesPerView,
        spaceBetween: params.spaceBetween,
        freeMode: true,
        centeredSlides: false,
        // pagination حذف شده عمداً
      });

      isSwiperActive = true;
    }

    function updateSwiperIfActive() {
      if (!isSwiperActive || !swiperInstance) return;
      const params = computeSwiperParams();
      swiperInstance.params.slidesPerView = params.slidesPerView;
      swiperInstance.params.spaceBetween = params.spaceBetween;
      swiperInstance.update();
    }

    function deactivateSwiper() {
      if (!isSwiperActive) return;
      const container = document.querySelector('.mySwiper-mobile');
      if (!container) return;

      if (swiperInstance && typeof swiperInstance.destroy === 'function') {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }

      const wrapper = container.querySelector('.swiper-wrapper');
      const slides = wrapper ? Array.from(wrapper.children) : [];

      const fragment = document.createDocumentFragment();
      slides.forEach(slide => {
        const card = slide.firstElementChild;
        if (card) {
          card.style.margin = '';
          card.style.padding = '';
          fragment.appendChild(card);
        }
      });

      container.classList.remove('swiper', 'mySwiper-mobile');
      container.innerHTML = '';
      container.appendChild(fragment);

      const style = document.getElementById('swiper-mobile-inline-style');
      if (style) style.remove();

      isSwiperActive = false;
    }

    function checkAndToggle() {
      const isMobile = window.innerWidth <= MOBILE_MAX;
      if (isMobile) {
        if (!isSwiperActive) activateSwiper();
        else updateSwiperIfActive();
      } else {
        deactivateSwiper();
      }
    }

    window.addEventListener('load', checkAndToggle);
    window.addEventListener('resize', function () {
      clearTimeout(window.__swiper_mobile_resize_timer);
      window.__swiper_mobile_resize_timer = setTimeout(checkAndToggle, 120);
    });
    window.addEventListener('orientationchange', function () {
      setTimeout(checkAndToggle, 200);
    });
  })();

  // Box Content
  (function () {
  const MAX_ROT_X = 4;    
  const MAX_ROT_Y = 4;    
  const SCALE = 1;        
  const THROTTLE_MS = 16;  

  function throttle(fn, wait) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn.apply(this, args);
      }
    };
  }

  function resetTransformSmooth(el) {
    el.style.transition = 'transform 360ms cubic-bezier(.2,.8,.2,1)';
    el.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    const handler = () => { el.style.transition = ''; el.removeEventListener('transitionend', handler); };
    el.addEventListener('transitionend', handler);
  }

  function handleTilt(event, container, img) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = container.getBoundingClientRect();
    const clientX = event.clientX !== undefined ? event.clientX : (event.touches && event.touches[0] && event.touches[0].clientX);
    const clientY = event.clientY !== undefined ? event.clientY : (event.touches && event.touches[0] && event.touches[0].clientY);
    if (clientX == null || clientY == null) return;

    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;

    const dx = (px - 0.5);
    const dy = (py - 0.5);

    const rotY = dx * 2 * MAX_ROT_Y;
    const rotX = -dy * 2 * MAX_ROT_X;

    img.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(${SCALE})`;
  }

  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach(card => {
    const img = card.querySelector('img');
    if (!img) return;
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    const throttled = throttle((e) => handleTilt(e, card, img), THROTTLE_MS);

    card.addEventListener('pointermove', throttled, { passive: true });
    card.addEventListener('pointerenter', (e) => { img.style.transition = 'transform 120ms cubic-bezier(.2,.8,.2,1)'; }, { passive: true });
    card.addEventListener('pointerleave', (e) => resetTransformSmooth(img), { passive: true });

    card.addEventListener('focus', () => {
      img.style.transition = 'transform 180ms cubic-bezier(.2,.8,.2,1)';
      img.style.transform = `rotateX(6deg) rotateY(-6deg) scale(1)`; 
    });
    card.addEventListener('blur', () => resetTransformSmooth(img));

    window.addEventListener('resize', () => resetTransformSmooth(img));
  });

})();
// Link Image
(() => {
  const MAX_ROT_X = 6;
  const MAX_ROT_Y = 6;
  const RETURN_SPEED = 300;

  function handleTilt(event, container, img) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -MAX_ROT_X;
    const rotY = ((x - centerX) / centerX) * MAX_ROT_Y;

    img.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
  }

  function resetTilt(img) {
    img.style.transition = `transform ${RETURN_SPEED}ms ease`;
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => img.style.transition = '', RETURN_SPEED);
  }

  document.querySelectorAll('.group').forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    container.addEventListener('mouseenter', e => handleTilt(e, container, img));
    container.addEventListener('mousemove', e => handleTilt(e, container, img));
    container.addEventListener('mouseleave', () => resetTilt(img));
  });
})();

// News Items
(() => {
  const MAX_ROT_X = 0.06;
  const MAX_ROT_Y = 0.06;
  const RETURN_SPEED = 200;

  function smoothRatio(v) {
    return Math.sign(v) * Math.pow(Math.abs(v), 0.5);
  }

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function handleTilt(event, container, img) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let ratioX = (x - centerX) / centerX;
    let ratioY = (y - centerY) / centerY;
    ratioX = clamp(ratioX, -1, 1);
    ratioY = clamp(ratioY, -1, 1);

    const nx = smoothRatio(ratioX);
    const ny = smoothRatio(ratioY);

    const edgeDistX = Math.abs((x - centerX) / centerX); // 0..1
    const edgeDistY = Math.abs((y - centerY) / centerY); // 0..1

    // تضعیف بسیار قوی در گوشه‌ها (power بالا)
    const AXIS_ATTENUATION_POWER = 4.0;
    const axisAttX = 1 - Math.pow(edgeDistY, AXIS_ATTENUATION_POWER);
    const axisAttY = 1 - Math.pow(edgeDistX, AXIS_ATTENUATION_POWER);

    // خروجی نهایی با clamp و مقیاس کوچک (درجه)
    const finalRotX = clamp(ny * -MAX_ROT_X * axisAttX, -MAX_ROT_X, MAX_ROT_X);
    const finalRotY = clamp(nx * MAX_ROT_Y * axisAttY, -MAX_ROT_Y, MAX_ROT_Y);

    img.style.transform = `rotateX(${finalRotX.toFixed(3)}deg) rotateY(${finalRotY.toFixed(3)}deg)`;
  }

  function resetTilt(img) {
    img.style.transition = `transform ${RETURN_SPEED}ms ease`;
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => img.style.transition = '', RETURN_SPEED);
  }

  document.querySelectorAll('.group').forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    container.addEventListener('mousemove', e => handleTilt(e, container, img));
    container.addEventListener('mouseleave', () => resetTilt(img));
  });
})();

// Account Row
    document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.my-swiper', {
        slidesPerView: 4,
        spaceBetween: 12,
        loop: false,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 8 },
          480: { slidesPerView: 1.2, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          900: { slidesPerView: 3, spaceBetween: 12 },
          1120: { slidesPerView: 4, spaceBetween: 12 }
        },
        a11y: { enabled: true, prevSlideMessage: 'اسلاید قبلی', nextSlideMessage: 'اسلاید بعدی' },
        keyboard: { enabled: true, onlyInViewport: true }
      });

      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      prevBtn.addEventListener('click', () => swiper.slidePrev());
      nextBtn.addEventListener('click', () => swiper.slideNext());

      function updateNavState() {
        prevBtn.disabled = swiper.isBeginning;
        nextBtn.disabled = swiper.isEnd;
        prevBtn.style.opacity = swiper.isBeginning ? 0.5 : 1;
        nextBtn.style.opacity = swiper.isEnd ? 0.5 : 1;
      }
      swiper.on('slideChange transitionEnd', updateNavState);
      updateNavState();
    });

    // Account & Game Row

document.addEventListener('DOMContentLoaded', function () {
  const sliderEls = Array.from(document.querySelectorAll('.my-swiper'));

  sliderEls.forEach(function (sliderEl) {
    const container = sliderEl.closest('[data-swiper-container]') || sliderEl.closest('section') || sliderEl.parentElement;

    const prevBtn = container ? (container.querySelector('[data-swiper-prev]') || container.querySelector('#prevBtn')) : document.querySelector('[data-swiper-prev]') || document.querySelector('#prevBtn');
    const nextBtn = container ? (container.querySelector('[data-swiper-next]') || container.querySelector('#nextBtn')) : document.querySelector('[data-swiper-next]') || document.querySelector('#nextBtn');

    const swiper = new Swiper(sliderEl, {
      slidesPerView: 4,
      spaceBetween: 12,
      loop: false,
      watchOverflow: true,
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: { enabled: true, prevSlideMessage: 'اسلاید قبلی', nextSlideMessage: 'اسلاید بعدی' },
      navigation: {
        prevEl: prevBtn || null,
        nextEl: nextBtn || null
      },
      breakpoints: {
        0:    { slidesPerView: 1,   spaceBetween: 8 },
        480:  { slidesPerView: 1.2, spaceBetween: 8 },
        640:  { slidesPerView: 2,   spaceBetween: 10 },
        900:  { slidesPerView: 3,   spaceBetween: 12 },
        1120: { slidesPerView: 4,   spaceBetween: 12 }
      }
    });

    if (prevBtn) prevBtn.addEventListener('click', function (e) { e.preventDefault(); swiper.slidePrev(); });
    if (nextBtn) nextBtn.addEventListener('click', function (e) { e.preventDefault(); swiper.slideNext(); });

    window.addEventListener('load', function () {
      try { swiper.update(); if (swiper.navigation) swiper.navigation.update(); } catch (err) {}
    });

    swiper.on('slideChange transitionEnd', function () {
      const slides = sliderEl.querySelectorAll('.swiper-slide');
      slides.forEach(function (s) {
        const focusables = Array.from(s.querySelectorAll('a, button, input, select, textarea, [tabindex]')).filter(Boolean);
        const visible = s.classList.contains('swiper-slide-active') || s.classList.contains('swiper-slide-visible');
        focusables.forEach(function (el) {
          if (visible) { el.removeAttribute('aria-hidden'); el.tabIndex = 0; }
          else { el.setAttribute('aria-hidden', 'true'); el.tabIndex = -1; }
        });
      });
    });

    try { swiper.emit('slideChange'); } catch (e) {}
  });
});
// Document
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.my-swiper-blog', {
    slidesPerView: 4,
    spaceBetween: 12,
    loop: false,
    centeredSlides: false,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next-blog',
      prevEl: '.swiper-button-prev-blog',
    },
    breakpoints: {
      0: { slidesPerView: 1.05, spaceBetween: 10 },
      480: { slidesPerView: 1.3, spaceBetween: 10 },
      768: { slidesPerView: 2.3, spaceBetween: 12 },
      1024: { slidesPerView: 3.3, spaceBetween: 14 },
      1280: { slidesPerView: 4, spaceBetween: 16 },
    },
    on: {
      init: function () {
        this.wrapperEl.style.paddingRight = '16px';
      },
    },
  });
});
// text weblog
  document.querySelectorAll('.toggle-section').forEach(section => {
    const extraText = section.querySelector('.extra-text');
    const showMore = section.querySelector('.show-more');
    const showLess = section.querySelector('.show-less');
    const chevron = section.querySelector('.chevron');

    showMore.addEventListener('click', () => {
      extraText.classList.remove('hidden');
      showMore.classList.add('hidden');
      showLess.classList.remove('hidden');
      chevron.classList.add('rotate-180', 'transition-transform');
    });

    showLess.addEventListener('click', () => {
      extraText.classList.add('hidden');
      showLess.classList.add('hidden');
      showMore.classList.remove('hidden');
      chevron.classList.remove('rotate-180');
    });
  });
// Support
(() => {
  const MAX_ROT_X = 6; // 👈 زاویه ملایم‌تر
  const MAX_ROT_Y = 6;
  const RETURN_SPEED = 400;
  const DEPTH = 40;

  document.querySelectorAll('.tilt-item').forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;

    item.style.perspective = `${DEPTH * 50}px`;

    function handleTilt(event) {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -MAX_ROT_X;
      const rotY = ((x - centerX) / centerX) * MAX_ROT_Y;

      img.style.transition = 'transform 0.05s ease-out';
      img.style.transform = `
        rotateX(${rotX.toFixed(2)}deg)
        rotateY(${rotY.toFixed(2)}deg)
        scale3d(1.03, 1.03, 1.03)
      `;
      img.style.transformStyle = 'preserve-3d';
    }

    function resetTilt() {
      img.style.transition = `transform ${RETURN_SPEED}ms ease`;
      img.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }

    item.addEventListener('mousemove', handleTilt);
    item.addEventListener('mouseenter', handleTilt);
    item.addEventListener('mouseleave', resetTilt);
  });
})();
// page up
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
// Page up
  document.querySelectorAll('.faq-header').forEach((header) => {
    header.addEventListener('click', function () {
      const faqItem = header.parentElement;
      const content = faqItem.querySelector('.faq-content');
      const icon = header.querySelector('svg');

      faqItem.classList.toggle('open');
      
      if (faqItem.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0)';
      }
    });
  });
// hide & show arrow down
(function() {
  const nav = document.getElementById('mobileBottomNav');
  if (!nav) return;

  let lastScroll = window.scrollY || 0;
  let ticking = false;
  const threshold = 10;
  const hiddenClass = 'translate-y-28';
  const visibleClass = 'translate-y-0';

  // ensure initial state
  nav.classList.remove(hiddenClass);
  nav.classList.add(visibleClass);

  function onScroll() {
    const current = window.scrollY || 0;
    const delta = current - lastScroll;

    if (Math.abs(delta) < threshold) {
      ticking = false;
      return;
    }

    if (delta > 0 && current > 50) {
      nav.classList.add(hiddenClass);
      nav.classList.remove(visibleClass);
    } else if (delta < 0) {
      nav.classList.remove(hiddenClass);
      nav.classList.add(visibleClass);
    }

    lastScroll = current;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  document.addEventListener('focusin', (e) => {
    if (!nav) return;
    nav.classList.remove(hiddenClass);
    nav.classList.add(visibleClass);
  });

  window.addEventListener('resize', () => {
    nav.style.paddingBottom = 'env(safe-area-inset-bottom)';
  });
})();
