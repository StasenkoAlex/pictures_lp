import { postData } from '../services/requests';

const forms = () => {
  const allForms = document.querySelectorAll('form'),
    allInputs = document.querySelectorAll('input'),
    allTextArea = document.querySelectorAll('textarea'),
    filesInput = document.querySelectorAll('input[type = "file"]');

  const progress = {
    loading: 'Sending',
    suscess: 'We respond you asap',
    error: 'sorry, something gone wrong',
    loadingImg: './assets/img/spinner.gif',
    suscessImg: './assets/img/ok.png',
    errorImg: './assets/img/fail.png',
  };

  allForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formParent = form.parentNode;
      const status = document.createElement('div'),
        statusImg = document.createElement('img'),
        statusText = document.createElement('span');
      status.classList.add('status');
      statusImg.src = progress.loadingImg;
      statusText.textContent = progress.loading;
      status.append(statusText);
      status.append(statusImg);

      formParent.append(status);

      let data = new FormData(form);
      let path;

      formParent.closest('.popup-design') ? (path = './assets/server.php') : (path = './assets/question.php');
      postData(path, data)
        .then((res) => {
          form.style.display = 'none';
          statusImg.src = progress.suscessImg;
          statusText.textContent = progress.suscess;
        })
        .catch((e) => {
          console.log(e);
          form.style.display = 'none';
          statusImg.src = progress.errorImg;
          statusText.textContent = progress.error;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            status.remove();
            form.style.display = 'block';
          }, 3000);
        });
    });
  });

  function clearInputs() {
    [...allInputs, ...allTextArea].forEach((item) => (item.value = ''));
    filesInput.forEach((item) => {
      item.previousElementSibling.textContent = '';
    });
  }

  filesInput.forEach((item) => {
    item.addEventListener('input', () => {
      const arr = item.files[0].name.split('.');
      let fileName, divider;
      arr[0].length > 5 ? (divider = '...') : (divider = '.');
      fileName = arr[0].slice(0, 5) + divider + arr[1];
      item.previousElementSibling.textContent = fileName;
    });
  });
};

export default forms;
