const mask = (selector) => {
  function createMask(event) {
    let matrix = '+38 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

    if (val.length < def.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 3) {
        this.value = '';
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
  }

  let setCursorPosition = (pos, element) => {
    element.focus();
    if (element.setSelectionRange) {
      element.setSelectionRange(pos, pos);
    }
  };

  const allInputs = document.querySelectorAll(selector);
  console.log(allInputs);
  allInputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('selectionchange', () => {
      console.log('caret position', this.selectionStart);
    });
  });
};

export default mask;
