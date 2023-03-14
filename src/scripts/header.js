const header = document.getElementById('header');

if (header) {
  const content = header.querySelector('.header__content');
  let contentHeight = 0;

  const SetHeight = (target) => {
    contentHeight = target.offsetHeight;
    document.documentElement.style.setProperty('--header-offset', -contentHeight + 'px');
  }

  SetHeight(content);

  window.addEventListener('resize', () => SetHeight(content));

  // ------------------------------------------------------------------

  const mobile = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-menu__overlay');

  const mobileBurger = header.querySelector('.hamburger');

  mobileBurger.addEventListener('click', () => Menu());
  mobileOverlay.addEventListener('click', () => Menu());

  function Menu() {
    mobile.classList.toggle(StyleСlass.mobile.open);
    mobileBurger.classList.toggle('is-active')
    document.body.classList.toggle('disable-scroll');
  }
}