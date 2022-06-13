const calcCost = (size, material, options, promo, result) => {
  const sizeBox = document.querySelector(size),
    materialBox = document.querySelector(material),
    optionsBox = document.querySelector(options),
    promoBox = document.querySelector(promo),
    resultBox = document.querySelector(result);

  function calcPrice() {
    let sum = +sizeBox.value * +materialBox.value + +optionsBox.value;

    if (+sizeBox.value == '' && +materialBox.value == '') {
      resultBox.textContent = 'выберите остальные параметры';
    } else if (promoBox.value === 'IWANTPOPART') {
      sum = sum * 0.7;
    } else {
      resultBox.textContent = sum;
    }
  }

  sizeBox.addEventListener('change', calcPrice);
  materialBox.addEventListener('change', calcPrice);
  optionsBox.addEventListener('change', calcPrice);
  promoBox.addEventListener('input', calcPrice);
};
export default calcCost;
