(() => {
  const refs = {
    startSnowBtn: document.querySelector('.snow__button'),
    snowWrapper: document.querySelector('body'),
  };

  console.log('snow');

  refs.startSnowBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.snowWrapper.classList.toggle('snow');
  }
})();
