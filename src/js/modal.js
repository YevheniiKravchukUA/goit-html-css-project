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
    openModalBtn: document.querySelector('[data-modal-info-open]'),
    closeModalBtn: document.querySelector('[data-modal-info-close]'),
    modal: document.querySelector('[data-modal-info]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-down-open]'),
    closeModalBtn: document.querySelector('[data-modal-down-close]'),
    modal: document.querySelector('[data-modal-down]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// data-modal-open  --  на кнопку открытия модалки --/-- добавляем как атрибут
// data-modal-close  --  на кнопку закрытия модалки --/-- добавляем как атрибут
// data-modal  -- на бэкдроп или модалку (на самого первого родителя модального окна) --/-- добавляем как атрибут
// is-hidden  -- класс, который будет добавлятся к модальному окну, относительно этого класса и делаем стили --/-- добавляем как класс
