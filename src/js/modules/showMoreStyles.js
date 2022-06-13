import { getData } from '../services/requests';

const showMoreStyles = (trigger, parent) => {
  const btn = document.querySelector(trigger),
    cardsWrap = document.querySelector(parent);

  btn.addEventListener('click', function () {
    this.classList.add('animated', 'fadeOut');
    this.remove();
    getData('http://localhost:3000/styles').then((res) => {
      createCards(res);
    });
  });

  function createCards(data) {
    data.forEach(({ src, title, link }) => {
      const card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
      card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
        `;
      console.log(cardsWrap);
      cardsWrap.append(card);
    });
  }
};

export default showMoreStyles;
