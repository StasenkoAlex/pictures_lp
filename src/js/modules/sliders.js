const sliders = (slider, dir, prev, next) => {
  let sliderIndex = 1;
  let autoSlide;
  const sliderGroup = document.querySelectorAll(slider);

  function showSlide(i) {
    if (i > sliderGroup.length) {
      sliderIndex = 1;
    }
    if (i < 1) {
      sliderIndex = sliderGroup.length;
    }
    sliderGroup.forEach((item) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    sliderGroup[sliderIndex - 1].style.display = 'block';
    if (dir === 'vertical') {
      sliderGroup[sliderIndex - 1].classList.add('slideInDown');
    } else {
      sliderGroup[sliderIndex - 1].classList.add('slideInLeft');
    }
  }

  //   showSlide(sliderIndex);

  function plusSlide(n) {
    showSlide((sliderIndex += n));
  }

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlide(-1);
    });
    nextBtn.addEventListener('click', () => {
      plusSlide(1);
    });
  } catch (e) {}

  activateSlider();

  function activateSlider() {
    autoSlide = setInterval(() => {
      plusSlide(1);
    }, 3000);
  }

  sliderGroup[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });

  sliderGroup[0].parentNode.addEventListener('mouseleave', () => {
    activateSlider();
  });
};

export default sliders;
