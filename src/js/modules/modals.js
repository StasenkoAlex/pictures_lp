const modals = () => {
  let btnPressed = false;
  function bindModal(targetSelector, modalSelector, closeSelector, destroyTrigger = false) {
    const trigger = document.querySelectorAll(targetSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;

        if (destroyTrigger) {
          item.remove();
        }
        windows.forEach((item) => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.oveflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((item) => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.oveflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.oveflow = '';
      }
    });
  }

  function popupTimer(modalSelector, time) {
    const modal = document.querySelector(modalSelector),
      windows = document.querySelectorAll('[data-modal]');
    let display;

    windows.forEach((item) => {
      if (getComputedStyle(item).display !== 'none') {
        display = true;
      }
    });
    if (!display) {
      setTimeout(() => {
        modal.style.display = 'block';
        document.body.style.oveflow = 'hidden';
      }, time);
    }
  }

  function openByScroll(elem) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
        document.querySelector(elem).click();
      }
    });
  }

  openByScroll('.fixed-gift');

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  popupTimer('.popup-consultation', 60000);
};

export default modals;
