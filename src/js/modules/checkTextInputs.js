const checkTextInputs = (selector) => {
  const txtInput = document.querySelectorAll(selector);
  txtInput.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
