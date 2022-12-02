(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-info-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-info-close]'),
    modal: document.querySelector('[data-modal-info]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-down-open]'),
    closeModalBtn: document.querySelector('[data-modal-down-close]'),
    modal: document.querySelector('[data-modal-down]'),
    btn: document.querySelector('.download-modal__btn'),
    great: document.querySelector('.download-modal--great'),
    form: document.querySelector('.download-modal__content-wrapper'),
    input: document.querySelector('.download-modal__field'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', returns);
  refs.btn.addEventListener('click', hidden);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function hidden(e) {
    refs.great.classList.toggle('block');
    refs.form.classList.toggle('none');
    e.preventDefault();
  }

  function returns() {
    refs.modal.classList.toggle('is-hidden');
    refs.great.classList.toggle('block');
    refs.form.classList.toggle('none');
    refs.input.value = ' ';
  }
})();

// data-modal-open  --  на кнопку открытия модалки --/-- добавляем как атрибут
// data-modal-close  --  на кнопку закрытия модалки --/-- добавляем как атрибут
// data-modal  -- на бэкдроп или модалку (на самого первого родителя модального окна) --/-- добавляем как атрибут
// is-hidden  -- класс, который будет добавлятся к модальному окну, относительно этого класса и делаем стили --/-- добавляем как класс
