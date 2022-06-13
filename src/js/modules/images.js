const images = (elem) => {
  const allImg = document.querySelectorAll(elem);

  allImg.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const img = item.querySelector('img');
      const fileName = img.src.split('.');
      img.src = fileName[0] + '-1.' + fileName[1];
    });
    item.addEventListener('mouseleave', () => {
      const img = item.querySelector('img');
      img.src = img.src.replace(/-1\./, '.');
    });
  });
};

export default images;
